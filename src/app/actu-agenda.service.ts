import { Injectable } from '@angular/core';
import { ActuAgenda } from './actu-agenda';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActuAgendaService {
  subscribe(arg0: (newActu: any) => void) {
    throw new Error("Method not implemented.");
  }

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId = 0;

  // Placeholder for actus
  actus: ActuAgenda[] = [];

  constructor(private api: ApiService) {}

  // Simulate POST /actus
  addActuAgenda(actu: ActuAgenda): ActuAgendaService {
    if (!actu.id) {
      actu.id = ++this.lastId;
    }
    this.actus.push(actu);
    return this;
  }

  // Simulate DELETE /actus/:id
  deleteActuAgendaById(id: number): ActuAgendaService {
    this.actus = this.actus
      .filter(actu => actu.id !== id);
    return this;
  }

  // Simulate PUT /actus/:id
  // tslint:disable-next-line: ban-types
  updateActuAgendaById(id: number, values: Object = {}): ActuAgenda {
    const actu = this.getActuAgendaById(id);
    if (!actu) {
      return null;
    }
    Object.assign(actu, values);
    return actu;
  }

  // Simulate GET /actus
  getAllActusAgenda(): Observable<ActuAgenda[]> {
    return this.api.getAllActusAgenda();
  }

  // Simulate GET /actus/:id
  getActuAgendaById(id: number): ActuAgenda {
    return this.actus
      .filter(actu => actu.id === id)
      .pop();
  }
}
