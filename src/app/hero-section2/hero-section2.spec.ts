import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSection2 } from './hero-section2';

describe('HeroSection2', () => {
  let component: HeroSection2;
  let fixture: ComponentFixture<HeroSection2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSection2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSection2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
