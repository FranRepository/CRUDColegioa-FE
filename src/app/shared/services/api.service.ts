// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:7147/api/';

  constructor(private http: HttpClient) {}

  // Servicios relacionados con Alumnos
  getAlumno(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}Alumno/Get/${id}`);
  }

  insertAlumno(alumno: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}Alumno/Insert`, alumno);
  }

  updateAlumno(alumno: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}Alumno/Update`, alumno);
  }

  deleteAlumno(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}Alumno/Delete/?id=${id}`);
  }

  // Servicios relacionados con Profesores
  getProfesor(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}Profesor/GetProfesor/${id}`);
  }

  insertProfesor(profesor: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}Profesor/Insert`, profesor);
  }

  updateProfesor(profesor: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}Profesor/Update`, profesor);
  }
  deleteProfesor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}Profesor/Delete/${id}`);
  }

  // Servicios relacionados con Grados
  getGrado(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}Grado/GetGrado/${id}`);
  }

  insertGrado(grado: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}Grado/Insert`, grado);
  }

  updateGrado(grado: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}Grado/Update`, grado);
  }

  deleteGrado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}Grado/Delete/?id=${id}`);
  }

  // Servicios relacionados con AlumnosGrados
  getAlumnoGrado(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}AlumnoGrado/GetAlumnoGrado/${id}`);
  }

  insertAlumnoGrado(alumnoGrado: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}AlumnoGrado/Insert`, alumnoGrado);
  }

  updateAlumnoGrado(alumnoGrado: any): Observable<any> {
    console.log("🚀 ~ file: api.service.ts:76 ~ ApiService ~   alumnoGrado:",   alumnoGrado)
    return this.http.post<any>(`${this.baseUrl}AlumnoGrado/Update`, alumnoGrado);
  }

  deleteAlumnoGrado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}AlumnoGrado/Delete/${id}`);
  }
  getAllAlumnos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}Alumno/GetAll`);
  }

  // Métodos para la entidad Profesor
  getAllProfesores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}Profesor/GetAll`);
  }

  // Métodos para la entidad Grado
  getAllGrados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}Grado/GetAll`);
  }

  // Métodos para la entidad AlumnoGrado
  getAllAlumnosGrado(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}AlumnoGrado/GetAll`);
  }
}
