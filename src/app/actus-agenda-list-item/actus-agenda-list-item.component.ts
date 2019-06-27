import { Component, OnInit, Input } from '@angular/core';
import { ActuAgenda } from '../actu-agenda';

@Component({
  selector: 'app-actus-agenda-list-item',
  templateUrl: './actus-agenda-list-item.component.html',
  styleUrls: ['./actus-agenda-list-item.component.css']
})
export class ActusAgendaListItemComponent {

  @Input() actu: ActuAgenda;

  constructor() {}

}
