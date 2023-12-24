import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {

  patientId: number = 0;
  patient: Patient = new Patient();

  constructor(private activatedRoute: ActivatedRoute,
    private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.patientId = this.activatedRoute.snapshot.params['patientId'];
    console.log("Patient ID: "+ this.patientId);
    this.patientService.getPatientById(this.patientId).subscribe(data =>{
      this.patient = data;
    },
    error => console.log(error));
  }
  
  backToPatientList(){
    this.router.navigate(['patients']);
  }





}
