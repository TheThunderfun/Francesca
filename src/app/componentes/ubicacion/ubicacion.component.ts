import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EstadoLocal, HORARIOS_TABLA, NEGOCIO } from '../../config/negocio';
import { IconoComponent } from '../icono/icono.component';

@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [NgFor, NgIf, IconoComponent],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.scss',
})
export class UbicacionComponent {
  @Input() estado?: EstadoLocal;

  readonly negocio = NEGOCIO;
  readonly horarios = HORARIOS_TABLA;
  // La URL sale de nuestra propia configuración, no de la entrada de una persona.
  readonly mapaSeguro: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.mapaSeguro = sanitizer.bypassSecurityTrustResourceUrl(NEGOCIO.mapaEmbed);
  }
}
