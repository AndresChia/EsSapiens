import { TestBed } from '@angular/core/testing';

import { ControlarPestañasService } from './controlar-pestañas.service';

describe('ControlarPestañasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlarPestañasService = TestBed.get(ControlarPestañasService);
    expect(service).toBeTruthy();
  });
});
