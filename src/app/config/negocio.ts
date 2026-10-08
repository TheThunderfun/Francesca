// =============================================================
//  Datos del negocio — única fuente de verdad.
//  Todo lo que la página muestra como dato (teléfono, dirección,
//  horarios, redes) sale de acá. Los TODO son datos que faltan.
// =============================================================

export const NEGOCIO = {
  nombre: 'Francesca',
  descriptor: 'Fábrica de pastas',
  direccion: 'Av. Manuel Belgrano 3311',
  localidad: 'Sarandí, Provincia de Buenos Aires',
  codigoPostal: 'B1872FVM',

  // TODO(cliente): confirmar el código de área (se asumió 11, GBA).
  telefonoVisible: '4205-5330',
  telefonoLink: '+541142055330',

  // WhatsApp en formato internacional, sin "+" ni espacios (+54 9 11 2185-3476).
  // Si se vacía, todos los botones de pedido caen a una llamada telefónica (ver `pedido`).
  whatsapp: '5491121853476',

  instagram: 'https://www.instagram.com/francescapasionporlaspastas/',
  instagramUsuario: '@francescapasionporlaspastas',
  facebook: 'https://www.facebook.com/profile.php?id=100063466961888',
  mapaLink: 'https://www.google.com/maps?q=Av.+Manuel+Belgrano+3311,+Sarand%C3%AD',
  mapaEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.788194537277!2d-58.34834272493904!3d-34.6852947618098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3331e4bb62699%3A0x96d0e25318523e59!2sAv.%20Manuel%20Belgrano%203311%2C%20B1872FVM%20Sarand%C3%AD%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1747509257968!5m2!1ses-419!2sar',
};

const MENSAJE_PEDIDO = 'Hola! Quiero hacer un pedido de pastas para retirar por el local.';

/** Botón de pedido: WhatsApp si hay número cargado; si no, llamada. */
export const pedido = {
  esWhatsapp: !!NEGOCIO.whatsapp,
  href: NEGOCIO.whatsapp
    ? `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(MENSAJE_PEDIDO)}`
    : `tel:${NEGOCIO.telefonoLink}`,
  etiquetaLarga: NEGOCIO.whatsapp ? 'Pedir por WhatsApp' : 'Pedir por teléfono',
  etiquetaCorta: 'Hacé tu pedido',
};

// ---------- Horarios ----------
// Clave = día de la semana (0 domingo … 6 sábado). Valor = franjas [desde, hasta) en horas.
// TODO(cliente): confirmar que el lunes está cerrado (se deduce de "martes a sábado").
export const FRANJAS: Record<number, [number, number][]> = {
  0: [[9, 13]],
  1: [],
  2: [[9, 13], [17, 19]],
  3: [[9, 13], [17, 19]],
  4: [[9, 13], [17, 19]],
  5: [[9, 13], [17, 19]],
  6: [[9, 13], [17, 19]],
};

export const DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

export function textoFranjas(dia: number): string {
  const f = FRANJAS[dia];
  return f.length ? f.map(([a, b]) => `${a} a ${b} h`).join(' y ') : 'Cerrado';
}

/** Filas para la tabla: agrupa los días con el mismo horario. */
export const HORARIOS_TABLA: { dias: string; horas: string; indices: number[] }[] = [
  { dias: 'Lunes', horas: textoFranjas(1), indices: [1] },
  { dias: 'Martes a sábado', horas: textoFranjas(2), indices: [2, 3, 4, 5, 6] },
  { dias: 'Domingo', horas: textoFranjas(0), indices: [0] },
];

export interface EstadoLocal {
  abierto: boolean;
  texto: string;
  hoy: number;
}

const hora = (h: number) => `${h} h`;

/** Estado en vivo del local según la hora de Buenos Aires. */
export function estadoDelLocal(ahora: Date = new Date()): EstadoLocal {
  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Argentina/Buenos_Aires',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(ahora);
  const get = (t: string) => partes.find((p) => p.type === t)?.value ?? '';
  const hoy = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  const minutos = (Number(get('hour')) % 24) * 60 + Number(get('minute'));

  const abiertaAhora = FRANJAS[hoy].find(([a, b]) => minutos >= a * 60 && minutos < b * 60);
  if (abiertaAhora) {
    return { abierto: true, hoy, texto: `Abierto ahora · cerramos a las ${hora(abiertaAhora[1])}` };
  }

  const proximaHoy = FRANJAS[hoy].find(([a]) => minutos < a * 60);
  if (proximaHoy) {
    return { abierto: false, hoy, texto: `Cerrado ahora · abrimos hoy a las ${hora(proximaHoy[0])}` };
  }
  for (let i = 1; i <= 7; i++) {
    const dia = (hoy + i) % 7;
    const franja = FRANJAS[dia][0];
    if (!franja) continue;
    const cuando = i === 1 ? 'mañana' : `el ${DIAS[dia].toLowerCase()}`;
    return { abierto: false, hoy, texto: `Cerrado ahora · abrimos ${cuando} a las ${hora(franja[0])}` };
  }
  return { abierto: false, hoy, texto: 'Cerrado ahora' };
}
