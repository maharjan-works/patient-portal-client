import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  patientId: number = 0;
  patient: Patient = new Patient();

  constructor(private patientService: PatientService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.patientId = this.activatedRoute.snapshot.params['patientId'];
   this.patientService.getPatientById(this.patientId).subscribe(data =>{
      this.patient = data;
    },
    error => console.log(error));
  }

  updatePatient(){
    this.patientService.updatePatient(this.patientId,this.patient).subscribe(data =>{
      this.routePatients();
    }, 
    error => console.log(error));
  }

 private routePatients(){
    this.router.navigate(['/patients'])
  }

}
