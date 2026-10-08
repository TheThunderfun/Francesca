import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IconoComponent } from '../icono/icono.component';

interface Resena {
  texto: string;
  autor: string;
}

@Component({
  selector: 'app-resenas',
  imports: [NgFor, IconoComponent],
  standalone: true,
  templateUrl: './resenas.component.html',
  styleUrl: './resenas.component.scss',
})
export class ResenasComponent {
  readonly calificacion = '4,8';
  readonly cantidad = 165;
  readonly enlace =
    'https://www.google.com/maps/search/?api=1&query=Francesca+Pasi%C3%B3n+por+las+Pastas+Sarand%C3%AD';

  // Reseñas reales de Google, con puntuación y ortografía corregidas.
  readonly resenas: Resena[] = [
    {
      texto:
        'Lo elijo por la dedicación que le ponen, la materia prima de primera, la atención un 10. Compren sin miedo, el producto no falla, es exquisito.',
      autor: 'Valeria Decalli',
    },
    {
      texto:
        'Calidad premium, 10 puntos la atención. Comprar pastas en este lugar es seguridad de que vas a comer rico. Pidan tarta en la semana, que son ricas y frescas.',
      autor: 'Dario De La Cruz',
    },
    {
      texto: 'Pastas súper frescas, riquísimas. Excelente atención.',
      autor: 'Marcela A. Mangini',
    },
  ];
}
