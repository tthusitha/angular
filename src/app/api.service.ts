import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActuAgenda } from './actu-agenda';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  // API: GET /actus
  public getAllActusAgenda(): Observable<ActuAgenda[]> {
    return this.http.get(API_URL + '/actus').pipe(map((res: Response) => {
      const actus = res.json();
      return actus.map((actu) => new ActuAgenda(actu));
    }));
  }

  // API: POST /actus
  public createActuAgenda(actu: ActuAgenda) {
    // will use this.http.post()
  }

  // API: GET /actus/:id
  public getActuAgendaById(actu: number) {
    // will use this.http.get()
  }

  // API: PUT /actus/:id
  public updateActuAgenda(actu: ActuAgenda) {
    // will use this.http.put()
  }

  // DELETE /actus/:id
  public deleteActuAgendaById(actu: number) {
    // will use this.http.delete()
  }
}
