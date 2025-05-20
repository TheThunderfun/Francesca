import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface ProductoTabla {
  categoria: string;
  gustos: string[];
}

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
})
export class ProductosComponent {
  productos: ProductoTabla[] = [
    {
      categoria: 'Ravioles',
      gustos: [
        'Ricota y jamon',
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
        'Ricota,jamon y muzarella',
        'Ricota,verdura y muzzarella',
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
        'Jamon y muzarella',
        'Muzarella al pesto',
        'Rucula,jamon crudo y muzzarella',
      ],
    },
    {
      categoria: 'Lasagna',
      gustos: ['Ricota y verdura', 'Ricota y jamon', 'Carne'],
    },
    {
      categoria: 'Sorrentinos',
      gustos: [
        'Ricota,jamon y muzzarella',
        'Jamon y muzzarella',
        'Capresse',
        'Rucula,jamon crudo y muzzarella',
        'Roquefort,muzzarella y nuez',
      ],
    },
    {
      categoria: 'Raviolones',
      gustos: [
        'Pollo y jamon',
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
        'De papa rellenos de muzarella',
        'Malfattis de ricota y espinaca',
      ],
    },
    { categoria: 'Salsa', gustos: ['Fileto', 'Bolognesa', 'Blanca'] },
    {
      categoria: 'Especiales por semana',
      gustos: [
        'Raviolones de pollo y panceta',
        'Raviolones de osobuco al malbec',
        'Raviolones de merlusa al vino blanco ',
        'Sorrentinos napolitanos',
      ],
    },
  ];
}
