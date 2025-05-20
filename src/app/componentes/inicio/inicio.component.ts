import { Component, Input, Output, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { CommonModule } from '@angular/common';
import { UbicacionComponent } from '../ubicacion/ubicacion.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductosComponent } from '../productos/productos.component';

interface Producto {
  nombre: string;
  descripcion: string;
  imagen: string;
}
@Component({
  selector: 'app-inicio',
  imports: [
    HeaderComponent,
    ContactoComponent,
    CommonModule,
    UbicacionComponent,
    FooterComponent,
    ProductosComponent,

  ],
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {
  contacto = false;
  ubicacion = false;
  mostrarProductos = false;
  @ViewChild('inicio') inicioComponent!: InicioComponent;

  productos: Producto[] = [
    {
      nombre: 'Raviolones de osobuco',
      descripcion: '',
      imagen:
        'https://www.miguelvergara.com/actualidad/wp-content/uploads/2024/04/que-son-los-ravioli-de-carne-pasta-rellena-1200x860.jpg',
    },
    {
      nombre: 'Torteletti de pollo y cebolla de verdeo',
      descripcion: '',
      imagen:
        'https://www.lecuine.com/blog/wp-content/uploads/2016/09/pasta-rellena-625x408.jpg',
    },
    {
      nombre: 'Sorrentinos de Rucula,jamon crudo y muzzarella',
      descripcion: '',
      imagen:
        'https://img.freepik.com/foto-gratis/primer-plano-raviolis-crudos-espolvoreados-harina-tablero-madera-ingredientes_23-2147926006.jpg?ga=GA1.1.1745390637.1747685783&semt=ais_hybrid&w=740',
    },
  ];

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleContacto() {
    this.contacto = !this.contacto;
  }

  onCerrarContacto() {
    // Si Contacto quiere avisar que se cerró, por ejemplo
    this.contacto = false;
  }

  toggleUbicacion() {
    this.ubicacion = !this.ubicacion;
    console.log(this.ubicacion);
  }

  onCerrarUbicacion() {
    // Si Ubicacion quiere avisar que se cerró, por ejemplo
    this.ubicacion = false;
  }

  abrirModalProductos() {
    this.mostrarProductos = true;
  }
  cerrarModalProductos() {
    this.mostrarProductos = false;
  }
}
