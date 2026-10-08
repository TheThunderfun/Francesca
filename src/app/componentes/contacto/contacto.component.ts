import { Component } from '@angular/core';
import { NEGOCIO, pedido } from '../../config/negocio';
import { IconoComponent } from '../icono/icono.component';

// Antes era un overlay modal. Ahora es el cierre de la página: la llamada
// final a hacer el pedido, con todas las vías de contacto a la vista.
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [IconoComponent],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
  readonly negocio = NEGOCIO;
  readonly pedido = pedido;
}
