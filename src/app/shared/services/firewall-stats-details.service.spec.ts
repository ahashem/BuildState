/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FirewallStatsDetailsService } from './firewall-stats-details.service';

describe('Service: FirewallStatsDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirewallStatsDetailsService]
    });
  });

  it('should ...', inject([FirewallStatsDetailsService], (service: FirewallStatsDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
