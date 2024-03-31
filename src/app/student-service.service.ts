import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from './models/Etudiant';



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:4200/assets/Data_projet.json';


  constructor(private http: HttpClient) {}

  getStudents(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apiUrl);   
  }
  addStudents(Students: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.apiUrl + '/etudiants', Students);
  }

  deleteStudents(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/etudiants/${id}`);
  }

  updateStudents(id: number, updatedStudents: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.apiUrl}/etudiants/${id}`, updatedStudents);
  }
}
