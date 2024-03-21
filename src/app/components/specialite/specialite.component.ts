import { Component } from '@angular/core';
import { SpecialiteService } from '../../services/specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent {
  specialites : any=[];
  constructor(private serviceSpecialite : SpecialiteService){
    this.specialites = serviceSpecialite.specialites;
  };
}
