import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantHorsParisComponent } from './etudiant-hors-paris.component';

describe('EtudiantHorsParisComponent', () => {
  let component: EtudiantHorsParisComponent;
  let fixture: ComponentFixture<EtudiantHorsParisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantHorsParisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudiantHorsParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
