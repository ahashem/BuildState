/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuildDashboardService } from './build-dashboard.service';

describe('Service: BuildDashboard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildDashboardService]
    });
  });

  it('should ...', inject([BuildDashboardService], (service: BuildDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
