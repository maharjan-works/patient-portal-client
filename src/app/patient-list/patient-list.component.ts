import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[] = [];

  constructor() { }

  ngOnInit(): void {
    this.patients = [
      {
      "patientId": 100,
      "firstName": "joseph",
      "lastName": "biden",
      "dob": "1942-11-20T04:00:00.000+00:00",
      "email": "joe.biden@gmail.com",
      "phoneNumber": " 202-456-1111"
      },
      {
      "patientId": 101,
      "firstName": "kamala",
      "lastName": "harris",
      "dob": "1962-10-20T04:00:00.000+00:00",
      "email": "kamala.harris@gmail.com",
      "phoneNumber": " 202-456-1111"
      }
      ]
  }

}
