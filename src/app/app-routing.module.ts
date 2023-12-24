import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';

const routes: Routes = [
  {path: 'patients', component: PatientListComponent},
  {path: 'create-patient', component: CreatePatientComponent},
  {path: '', redirectTo: 'patients', pathMatch: 'full'},
  {path: 'update-patient/:patientId', component: UpdatePatientComponent},
  {path:'view-patient/:patientId', component: ViewPatientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
