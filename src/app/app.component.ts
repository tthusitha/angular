import { Component, OnInit } from '@angular/core';
import { ActuAgendaService } from './actu-agenda.service';
import { ActuAgenda } from './actu-agenda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ActuAgendaService]
})
export class AppComponent implements OnInit {

  // No longer needed, now handled by PublicationHeaderComponent
  // newActu: ActuAgenda = new ActuAgenda();
  actus: ActuAgenda[] = [];

  /**
   *
   * @param actuAgendaService
   * Ask Angular DI system to inject the dependency
   * associated with the dependency injection token ActuAgendaService
   * and assign it to a property called actuAgendaService
   */
  constructor(private actuAgendaService: ActuAgendaService) {}

  // No longer needed, now handled by PublicationHeaderComponent
  /*addActuAgenda() {
    this.actuAgendaService.addActuAgenda(this.newActu);
    this.newActu = new ActuAgenda();
  }*/

  onAddActuAgenda(actu) {
    this.actuAgendaService
      .addActuAgenda(actu)
      .subscribe(
        (newActu) => {
          this.actus = this.actus.concat(newActu);
        }
      );
  }

  onRemoveActuAgenda(actu) {
    this.actuAgendaService
      .deleteActuAgendaById(actu.id)
      .subscribe(
        (_) => {
          this.actus = this.actus.filter((t) => t.id !== actu.id);
        }
      );
  }

  public ngOnInit() {
    this.actuAgendaService
      .getAllActusAgenda()
      .subscribe(
        (actus) => {
          this.actus = actus;
        }
      );
  }
}
