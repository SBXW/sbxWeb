import { TestBed } from '@angular/core/testing';

import { SalidaParaService } from './salida-para.service';

describe('SalidaParaService', () => {
  let service: SalidaParaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalidaParaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
