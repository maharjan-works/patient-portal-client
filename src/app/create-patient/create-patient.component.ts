import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();

  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
  }

 private  saveEmployee(){
    this.patientService.savePatient(this.patient).subscribe(data =>{
      console.log(data);
      this.routePatientList();
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.patient);
    this.saveEmployee();
  }

 private routePatientList(){
    this.router.navigate(['/patients']);
  }

}
