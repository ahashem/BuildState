/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuildStatsDetailsService } from './build-stats-details.service';

describe('Service: BuildStatsDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildStatsDetailsService]
    });
  });

  it('should ...', inject([BuildStatsDetailsService], (service: BuildStatsDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
