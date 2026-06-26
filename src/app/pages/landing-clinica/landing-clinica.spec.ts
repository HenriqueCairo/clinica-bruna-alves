import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingClinica } from './landing-clinica';

describe('LandingClinica', () => {
  let component: LandingClinica;
  let fixture: ComponentFixture<LandingClinica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingClinica],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingClinica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
