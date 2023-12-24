import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[] = [];

  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPatients();
  }

 private getPatients(){
  this.patientService.getAllPatients().subscribe(data => {
   this.patients = data;
  });
 }

 updatePatient(patientId: number){
    this.router.navigate(['update-patient',patientId]);
 }

 deletePatient(patientId: number){
    this.patientService.deletePatient(patientId).subscribe(data => {
      console.log(data);
      this.getPatients();
    }, 
    error => console.log(error));
 }
 
 viewPatient(patientId: number){
  this.router.navigate(['view-patient',patientId]);
 }



}
