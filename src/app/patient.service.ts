import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8080/api/v1/patient";

  constructor(private httpClient: HttpClient) { }

  getAllPatients(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
  }

  savePatient(patient: Patient): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, patient);
  }

  getPatientById(patientId: number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/${patientId}`);
  }

  updatePatient(patientId: number,  patient: Patient): Observable<Object>{
    return this.httpClient.put<Object>(`${this.baseURL}/${patientId}`, patient);
  }
}
