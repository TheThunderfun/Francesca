import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() toggleContactoEvent = new EventEmitter<void>();
  @Output() scrollTo = new EventEmitter<string>();
  @Output() toggleUbicacionEvent = new EventEmitter<void>();

  onProductosClick(id: string) {
    this.scrollTo.emit(id);
  }
  toggleContacto() {
    this.toggleContactoEvent.emit();
  }
  toggleUbicacion() {
    this.toggleUbicacionEvent.emit();
  }
}
