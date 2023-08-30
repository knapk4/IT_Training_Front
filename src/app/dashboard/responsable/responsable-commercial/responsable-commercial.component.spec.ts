import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableCommercialComponent } from './responsable-commercial.component';

describe('ResponsableCommercialComponent', () => {
  let component: ResponsableCommercialComponent;
  let fixture: ComponentFixture<ResponsableCommercialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsableCommercialComponent]
    });
    fixture = TestBed.createComponent(ResponsableCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
