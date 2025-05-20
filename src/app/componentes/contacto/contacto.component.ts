import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
  @Input() mostrar = false;
  @Output() cerrar = new EventEmitter<void>();
  @Output() mostrarUbicacion = new EventEmitter<void>();

  animandoCerrar = false;

  cerrarContacto() {
    this.animandoCerrar = true;
    // Esperamos el tiempo de la animación y luego emitimos el evento cerrar
    setTimeout(() => {
      this.cerrar.emit();
      this.animandoCerrar = false;
    }, 300); // Debe coincidir con la duración de la animación CSS
  }
}
