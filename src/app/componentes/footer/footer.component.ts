import { Component } from '@angular/core';
import { HORARIOS_TABLA, NEGOCIO } from '../../config/negocio';
import { IconoComponent } from '../icono/icono.component';

@Component({
  selector: 'app-footer',
  imports: [IconoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly negocio = NEGOCIO;
  readonly horarios = HORARIOS_TABLA;
  readonly anio = new Date().getFullYear();
}
