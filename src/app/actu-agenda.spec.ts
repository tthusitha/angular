import { ActuAgenda } from './actu-agenda';

describe('ActuAgenda', () => {
  it('should create an instance', () => {
    expect(new ActuAgenda()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const actu = new ActuAgenda({
      titre: 'hello',
      description: 'hello',
      dateDiffusion: '10/12/2017'
    });
    expect(actu.titre).toEqual('hello');
    expect(actu.description).toEqual('hello');
    expect(actu.dateDiffusion).toEqual('10/12/2017');
  });
});
