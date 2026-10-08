import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IconoComponent } from '../icono/icono.component';
import { NEGOCIO, pedido } from '../../config/negocio';

interface ProductoTabla {
  categoria: string;
  gustos: string[];
}

@Component({
  selector: 'app-productos',
  imports: [NgFor, IconoComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
})
export class ProductosComponent {
  // Cada familia se abre con un toque, para no obligar a un scroll interminable.
  // En escritorio se abren las primeras tres; el resto, con un toque.
  readonly escritorio = window.matchMedia('(min-width: 768px)').matches;
  readonly pedido = pedido;

  readonly productos: ProductoTabla[] = [
    {
      categoria: 'Ravioles',
      gustos: [
        'Ricota y jamón',
        'Ricota y verdura',
        'Ricota y nuez',
        'Ricota y parmesano',
        'Pollo y verdura',
        'Verdura y muzzarella',
      ],
    },
    {
      categoria: 'Fideos',
      gustos: ['Cintas', 'Spaghetti', 'Al huevo', 'Espinaca', 'Fusilli'],
    },
    {
      categoria: 'Canelones',
      gustos: [
        'Ricota, jamón y muzzarella',
        'Ricota, verdura y muzzarella',
        'Ricota y nuez',
        'Pollo y verdura',
        'Especiales de calabaza',
      ],
    },
    {
      categoria: 'Torteletti',
      gustos: ['Pollo al verdeo', 'Pollo al champignon'],
    },
    {
      categoria: 'Agnolottis',
      gustos: [
        'Jamón y muzzarella',
        'Muzzarella al pesto',
        'Rúcula, jamón crudo y muzzarella',
      ],
    },
    {
      categoria: 'Lasagna',
      gustos: ['Ricota y verdura', 'Ricota y jamón', 'Carne'],
    },
    {
      categoria: 'Sorrentinos',
      gustos: [
        'Ricota, jamón y muzzarella',
        'Jamón y muzzarella',
        'Capresse',
        'Rúcula, jamón crudo y muzzarella',
        'Roquefort, muzzarella y nuez',
      ],
    },
    {
      categoria: 'Raviolones',
      gustos: [
        'Pollo y jamón',
        'Especiales de calabaza',
        'Pollo y verdura',
        'Verdura y muzzarella',
        'Caseritos de verdura',
      ],
    },
    {
      categoria: 'Ñoquis',
      gustos: [
        'Papa',
        'Espinaca',
        'Calabaza',
        'Ricota',
        'De papa rellenos de muzzarella',
        'Malfattis de ricota y espinaca',
      ],
    },
    { categoria: 'Salsas', gustos: ['Fileto', 'Bolognesa', 'Blanca'] },
    {
      categoria: 'Especiales por semana',
      gustos: [
        'Raviolones de pollo y panceta',
        'Raviolones de osobuco al malbec',
        'Raviolones de merlusa al vino blanco',
        'Sorrentinos napolitanos',
      ],
    },
  ];

  // Cada gusto abre el pedido con el producto precargado (WhatsApp, o llamada si no hay número).
  pedirHref(categoria: string, gusto: string): string {
    const producto = categoria === 'Especiales por semana' ? gusto : `${categoria} (${gusto})`;
    if (pedido.esWhatsapp) {
      const texto = `Hola! Quiero pedir ${producto} para retirar por el local.`;
      return `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(texto)}`;
    }
    return pedido.href;
  }
}
