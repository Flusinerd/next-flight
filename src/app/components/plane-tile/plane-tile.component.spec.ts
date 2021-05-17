import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneTileComponent } from './plane-tile.component';

describe('PlaneTileComponent', () => {
  let component: PlaneTileComponent;
  let fixture: ComponentFixture<PlaneTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
