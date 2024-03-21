import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantParisComponent } from './etudiant-paris.component';

describe('EtudiantParisComponent', () => {
  let component: EtudiantParisComponent;
  let fixture: ComponentFixture<EtudiantParisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantParisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudiantParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
