import { Component, Output, EventEmitter } from '@angular/core';
import { ActuAgenda } from '../actu-agenda';

@Component({
  selector: 'app-publication-header',
  templateUrl: './publication-header.component.html',
  styleUrls: ['./publication-header.component.css']
})
export class PublicationHeaderComponent {

  newActu: ActuAgenda = new ActuAgenda();

  @Output()
  add: EventEmitter<ActuAgenda> = new EventEmitter();

  constructor() {}

  addTodo() {
    this.add.emit(this.newActu);
    this.newActu = new ActuAgenda();
  }

}
