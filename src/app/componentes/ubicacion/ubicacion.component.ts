import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.scss',
})
export class UbicacionComponent {
  @Input() mostrar = false;
  @Output() cerrar = new EventEmitter<void>();

  animandoCerrar = false;

  cerrarUbicacion() {
    this.animandoCerrar = true;
    setTimeout(() => {
      this.cerrar.emit();
      this.mostrar = false;
      this.animandoCerrar = false;
    }, 300); // duración de la animación en ms

  }
}
