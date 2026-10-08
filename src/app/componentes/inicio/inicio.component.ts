import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { UbicacionComponent } from '../ubicacion/ubicacion.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductosComponent } from '../productos/productos.component';
import { ResenasComponent } from '../resenas/resenas.component';
import { EstadoLocal, NEGOCIO, estadoDelLocal, pedido } from '../../config/negocio';
import { IconoComponent } from '../icono/icono.component';

interface Producto {
  nombre: string;
  descripcion: string;
  imagen: string;
  alt: string;
  publicacion: string;
  pedido: string;
}

interface Diferencial {
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-inicio',
  imports: [
    NgFor,
    HeaderComponent,
    ContactoComponent,
    UbicacionComponent,
    FooterComponent,
    ProductosComponent,
    ResenasComponent,
    IconoComponent,
  ],
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent implements OnInit, AfterViewInit, OnDestroy {
  private observador?: IntersectionObserver;
  private reloj?: number;

  readonly negocio = NEGOCIO;
  readonly pedido = pedido;
  estado: EstadoLocal = estadoDelLocal();

  constructor(private host: ElementRef<HTMLElement>, private zona: NgZone) {}

  // Fotos reales de Instagram. Descripciones: textos de las propias publicaciones.
  readonly productos: Producto[] = [
    {
      // TODO(cliente): la publicación de Instagram dice "trucha salmonada" pero la foto
      // muestra raviolones con langostinos. Se muestra un texto neutro hasta confirmar
      // el relleno real o cambiar la foto.
      nombre: 'Raviolones frescos',
      descripcion: 'Con salsa cremosa. Consultanos por los rellenos disponibles.',
      imagen: 'assets/instagram-raviolones.jpg',
      alt: 'Raviolones con salsa cremosa y langostinos sobre un plato negro',
      publicacion: 'https://www.instagram.com/p/DdzwPxSN_9s/',
      pedido: 'Raviolones',
    },
    {
      nombre: 'Sorrentinos',
      descripcion: 'Frescos, hechos en el día.',
      imagen: 'assets/sorrentinos.webp',
      alt: 'Sorrentinos frescos enharinados, apilados sobre una mesada de mármol',
      publicacion: 'https://www.instagram.com/p/Das8_hnMm2v/',
      pedido: 'Sorrentinos',
    },
    {
      nombre: 'Ñoquis de calabaza',
      descripcion: 'Naturales, sin colorantes ni conservantes. Hechos en el momento.',
      imagen: 'assets/instagram-nioquis-calabaza.webp',
      alt: 'Ñoquis de calabaza espolvoreados con harina sobre una mesada de mármol',
      publicacion: 'https://www.instagram.com/p/DY7zUYlMgs_/',
      pedido: 'Ñoquis de calabaza',
    },
    {
      nombre: 'Canelones caseros',
      descripcion: 'De suprema de pollo y verdura, hechos con panqueques. Los hacemos a pedido.',
      imagen: 'assets/instagram-canelones.webp',
      alt: 'Canelones de pollo y verdura con salsa y queso rallado en bandejas',
      publicacion: 'https://www.instagram.com/p/DYhH3ygpgvI/',
      pedido: 'Canelones',
    },
    {
      nombre: 'Ñoquis de papa rellenos de muzzarella',
      descripcion: 'Ñoquis de papa frescos, con corazón de muzzarella.',
      imagen: 'assets/instagram-nioquis-papa.jpg',
      alt: 'Ñoquis de papa enharinados, apilados sobre una mesada blanca',
      publicacion: 'https://www.instagram.com/p/DZkPlYJNMsV/',
      pedido: 'Ñoquis de papa',
    },
  ];

  // Sólo hechos que figuran en el sitio anterior o en las publicaciones de Instagram.
  readonly diferenciales: Diferencial[] = [
    {
      titulo: 'Ravioles cortados a mano',
      texto: 'Con una ruedita, como las que usaban las abuelas.',
    },
    {
      titulo: 'Sin colorantes ni conservantes',
      texto: 'Los ñoquis de calabaza son naturales y los hacemos en el momento.',
    },
    {
      titulo: 'Para toda la semana',
      texto: 'Fideos, ravioles, sorrentinos, canelones, lasagna y salsas. Y especiales que cambian cada semana.',
    },
    {
      titulo: 'De barrio, hace más de 15 años',
      texto: 'Una fábrica familiar de Sarandí que trabaja cerca de sus vecinos.',
    },
  ];

  ngOnInit() {
    // El estado "abierto ahora" se refresca solo, sin disparar detección de cambios de más.
    this.zona.runOutsideAngular(() => {
      this.reloj = window.setInterval(() => {
        const nuevo = estadoDelLocal();
        if (nuevo.texto !== this.estado.texto) this.zona.run(() => (this.estado = nuevo));
      }, 60_000);
    });
  }

  ngAfterViewInit() {
    // Sin movimiento (preferencia del sistema) o sin observer: todo queda visible.
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (sinMovimiento || !('IntersectionObserver' in window)) return;

    const elementos = this.host.nativeElement.querySelectorAll<HTMLElement>('.reveal, .reveal-wipe');
    this.observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          e.target.classList.replace('reveal-pending', 'reveal-in');
          this.observador?.unobserve(e.target);
        }
      },
      { threshold: 0, rootMargin: '0px 0px 10% 0px' },
    );
    elementos.forEach((el) => {
      el.classList.add('reveal-pending');
      this.observador?.observe(el);
    });
  }

  ngOnDestroy() {
    this.observador?.disconnect();
    if (this.reloj) window.clearInterval(this.reloj);
  }

  ir(evento: Event, id: string) {
    evento.preventDefault();
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({ behavior: sinMovimiento ? 'auto' : 'smooth' });
  }

  // Botón "Pedir este" de cada pasta: WhatsApp con el nombre del producto; si no hay WhatsApp, llamada.
  pedirHref(nombre: string): string {
    if (pedido.esWhatsapp) {
      return `https://wa.me/${NEGOCIO.whatsapp}?text=` + encodeURIComponent(`Hola! Quiero pedir ${nombre} para retirar por el local.`);
    }
    return pedido.href;
  }
}
