/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuildResultComponent } from './build-result.component';

describe('BuildResultComponent', () => {
  let component: BuildResultComponent;
  let fixture: ComponentFixture<BuildResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
