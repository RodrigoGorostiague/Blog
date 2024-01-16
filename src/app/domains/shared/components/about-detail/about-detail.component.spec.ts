import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDetailComponent } from './about-detail.component';

describe('AboutDetailComponent', () => {
  let component: AboutDetailComponent;
  let fixture: ComponentFixture<AboutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
