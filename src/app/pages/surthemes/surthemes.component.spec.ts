import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurthemesComponent } from './surthemes.component';

describe('SurthemesComponent', () => {
  let component: SurthemesComponent;
  let fixture: ComponentFixture<SurthemesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurthemesComponent]
    });
    fixture = TestBed.createComponent(SurthemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
