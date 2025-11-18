import { TestBed } from '@angular/core/testing';

import { EplScoresService } from './epl-scores.service';

describe('EplScoresService', () => {
  let service: EplScoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EplScoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
