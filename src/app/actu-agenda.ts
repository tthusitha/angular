export class ActuAgenda {
  id: number;
  titre: string;
  description: string;
  dateDiffusion: string;

// tslint:disable-next-line: ban-types
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
