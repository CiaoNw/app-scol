import { Component } from '@angular/core';
import { IEtudiant } from '../../models/ietudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})

export class EtudiantComponent{
  etudiants : any = []
  constructor(private serviceEtudiant : EtudiantServiceService) {
    this.etudiants = serviceEtudiant.etudiants
  }
}
