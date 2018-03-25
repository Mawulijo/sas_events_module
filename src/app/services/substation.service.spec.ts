import { TestBed, inject } from '@angular/core/testing';

import { SubstationService } from './substation.service';

describe('SubstationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubstationService]
    });
  });

  it('should be created', inject([SubstationService], (service: SubstationService) => {
    expect(service).toBeTruthy();
  }));
});
