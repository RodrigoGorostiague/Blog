import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraslateComponent } from './traslate.component';

describe('TraslateComponent', () => {
  let component: TraslateComponent;
  let fixture: ComponentFixture<TraslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraslateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
