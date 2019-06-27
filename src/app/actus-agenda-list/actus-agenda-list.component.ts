import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActuAgenda } from '../actu-agenda';

@Component({
  selector: 'app-actus-agenda-list',
  templateUrl: './actus-agenda-list.component.html',
  styleUrls: ['./actus-agenda-list.component.css']
})
export class ActusAgendaListComponent {

  @Input()
  actus: ActuAgenda[];

  @Output()
  remove: EventEmitter<ActuAgenda> = new EventEmitter();

  constructor() {}

  onRemoveActuAgenda(actu: ActuAgenda) {
    this.remove.emit(actu);
  }

}
