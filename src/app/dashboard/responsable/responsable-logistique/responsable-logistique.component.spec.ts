import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableLogistiqueComponent } from './responsable-logistique.component';

describe('ResponsableLogistiqueComponent', () => {
  let component: ResponsableLogistiqueComponent;
  let fixture: ComponentFixture<ResponsableLogistiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsableLogistiqueComponent]
    });
    fixture = TestBed.createComponent(ResponsableLogistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
