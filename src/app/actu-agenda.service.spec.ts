import { TestBed, inject } from '@angular/core/testing';

import { ActuAgendaService } from './actu-agenda.service';
import { ActuAgenda } from './actu-agenda';

describe('ActuAgendaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ActuAgendaService]
  }));

  it('should be created', () => {
    const service: ActuAgendaService = TestBed.get(ActuAgendaService);
    expect(service).toBeTruthy();
  });

  describe('#getAllActusAgendas()', () => {

    it('should return an empty array by default', inject([ActuAgendaService], (service: ActuAgendaService) => {
      expect(service.getAllActusAgendas()).toEqual([]);
    }));

    it('should return all actus', inject([ActuAgendaService], (service: ActuAgendaService) => {
      const actu1 = new ActuAgenda({titre: 'Hello 1', description: 'desc1', dateDiffusion: '10/12/2017'});
      const actu2 = new ActuAgenda({titre: 'Hello 2', description: 'desc2', dateDiffusion: '10/12/2017'});
      service.addActuAgenda(actu1);
      service.addActuAgenda(actu2);
      expect(service.getAllActusAgendas()).toEqual([actu1, actu2]);
    }));

  });

  describe('#save(actu)', () => {

    it('should automatically assign an incrementing id', inject([ActuAgendaService], (service: ActuAgendaService) => {
      const actu1 = new ActuAgenda({titre: 'Hello 1', description: 'desc1', dateDiffusion: '10/12/2017'});
      const actu2 = new ActuAgenda({titre: 'Hello 2', description: 'desc2', dateDiffusion: '10/12/2017'});
      service.addActuAgenda(actu1);
      service.addActuAgenda(actu2);
      expect(service.getActuAgendaById(1)).toEqual(actu1);
      expect(service.getActuAgendaById(2)).toEqual(actu2);
    }));

  });

  describe('#deleteActuAgendaById(id)', () => {

    it('should remove actu with the corresponding id', inject([ActuAgendaService], (service: ActuAgendaService) => {
      const actu1 = new ActuAgenda({titre: 'Hello 1', description: 'desc1', dateDiffusion: '10/12/2017'});
      const actu2 = new ActuAgenda({titre: 'Hello 2', description: 'desc2', dateDiffusion: '10/12/2017'});
      service.addActuAgenda(actu1);
      service.addActuAgenda(actu2);
      expect(service.getAllActusAgendas()).toEqual([actu1, actu2]);
      service.deleteActuAgendaById(1);
      expect(service.getAllActusAgendas()).toEqual([actu2]);
      service.deleteActuAgendaById(2);
      expect(service.getAllActusAgendas()).toEqual([]);
    }));

    // tslint:disable-next-line: max-line-length
    it('should not removing anything if actu with corresponding id is not found', inject([ActuAgendaService], (service: ActuAgendaService) => {
      const actu1 = new ActuAgenda({titre: 'Hello 1', description: 'desc1', dateDiffusion: '10/12/2017'});
      const actu2 = new ActuAgenda({titre: 'Hello 2', description: 'desc2', dateDiffusion: '10/12/2017'});
      service.addActuAgenda(actu1);
      service.addActuAgenda(actu2);
      expect(service.getAllActusAgendas()).toEqual([actu1, actu2]);
      service.deleteActuAgendaById(3);
      expect(service.getAllActusAgendas()).toEqual([actu1, actu2]);
    }));

  });

  describe('#updateActuAgendaById(id, values)', () => {

    it('should return actu with the corresponding id and updated data', inject([ActuAgendaService], (service: ActuAgendaService) => {
      const actu = new ActuAgenda({titre: 'Hello 1', description: 'desc1', dateDiffusion: '10/12/2017'});
      service.addActuAgenda(actu);
      const updatedActu = service.updateActuAgendaById(1, {
        titre: 'new title'
      });
      expect(updatedActu.titre).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([ActuAgendaService], (service: ActuAgendaService) => {
      const actu = new ActuAgenda({titre: 'Hello 1', description: 'desc1', dateDiffusion: '10/12/2017'});
      service.addActuAgenda(actu);
      const updatedActu = service.updateActuAgendaById(2, {
        titre: 'new title'
      });
      expect(updatedActu).toEqual(null);
    }));

  });
});
