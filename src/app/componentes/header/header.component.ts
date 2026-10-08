import { NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NEGOCIO, pedido } from '../../config/negocio';
import { IconoComponent } from '../icono/icono.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, IconoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly negocio = NEGOCIO;
  readonly pedido = pedido;

  menuAbierto = false;
  conSombra = false;

  readonly enlaces = [
    { id: 'pastas', texto: 'Pastas' },
    { id: 'historia', texto: 'Nuestra historia' },
    { id: 'diferenciales', texto: 'Lo que nos distingue' },
    { id: 'donde', texto: 'Dónde estamos' },
  ];

  @HostListener('window:scroll')
  alHacerScroll() {
    this.conSombra = window.scrollY > 8;
  }

  @HostListener('document:keydown.escape')
  alEscape() {
    this.menuAbierto = false;
  }

  alternarMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  ir(evento: Event, id: string) {
    evento.preventDefault();
    this.menuAbierto = false;
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({ behavior: sinMovimiento ? 'auto' : 'smooth' });
  }
}
