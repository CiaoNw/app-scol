import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'app-etudiant', component: EtudiantComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-specialite', component: SpecialiteComponent },
  // { path: "", redirectTo: "first-component", pathMatch : "full"},
  // { path: "**", redirectTo: "first-component", pathMatch : "full"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
