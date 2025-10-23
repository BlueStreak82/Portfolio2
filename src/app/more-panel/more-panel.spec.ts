import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePanel } from './more-panel';

describe('MorePanel', () => {
  let component: MorePanel;
  let fixture: ComponentFixture<MorePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorePanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorePanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
