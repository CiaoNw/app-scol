import { Component } from '@angular/core';
import { IEtudiant } from '../../models/ietudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrl: './etudiant-hors-paris.component.css'
})

export class EtudiantHorsParisComponent {
  etudiants : any = []
  constructor(private serviceEtudiant : EtudiantServiceService) {
    this.etudiants = serviceEtudiant.etudiants;
}
}