import { Component } from '@angular/core';
import { IEtudiant } from '../../models/ietudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';
@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrl: './etudiant-paris.component.css'
})
export class EtudiantParisComponent {
  etudiants : any = []
  constructor(private serviceEtudiant : EtudiantServiceService) {
    this.etudiants = serviceEtudiant.etudiants;
}
}

