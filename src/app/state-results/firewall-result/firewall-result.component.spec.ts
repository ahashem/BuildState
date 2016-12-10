/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirewallResultComponent } from './firewall-result.component';

describe('FirewallResultComponent', () => {
  let component: FirewallResultComponent;
  let fixture: ComponentFixture<FirewallResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirewallResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirewallResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
