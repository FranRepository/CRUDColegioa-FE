// app.component.ts

import { Component, OnInit , AfterViewInit} from '@angular/core';
import { ApiService } from './shared/services/api.service';
import * as bootstrap from "bootstrap";
import { AgregarEditarProfesorComponent } from '../app/shared/components/agregar-editar-profesor/agregar-editar-profesor.component';
import { ModalService } from 'src/app/shared/services/modal.service';
import { Profesor1,ProfesorNuevo } from './shared/models/Profesor1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  profesores: any[] = [];
  grados: any[] = [];
  alumnos: any[] = [];
  alumnosGrado: any[] = [];


  constructor(private apiService: ApiService,private modalService: ModalService) { 
    
  }



  ngOnInit() {
    this.apiService.getAllProfesores().subscribe((data: any) => {
      this.profesores = data;
      console.log("🚀 ~ file: app.component.ts:22 ~ AppComponent ~ this.apiService.getAllProfesores ~   this.profesores = data;:",data)
    });

    this.apiService.getAllGrados().subscribe((data: any) => {
      this.grados = data;
      console.log("🚀 ~ file: app.component.ts:27 ~ AppComponent ~ this.apiService.getAllGrados ~   this.grados = data;:",data)
    });

    this.apiService.getAllAlumnos().subscribe((data: any) => {
      this.alumnos = data;
      console.log("🚀 ~ file: app.component.ts:32 ~ AppComponent ~ this.apiService.getAllAlumnos ~      this.alumnos = data;:",data)
    });

    this.apiService.getAllAlumnosGrado().subscribe((data: any) => {
      this.alumnosGrado = data;
      console.log("🚀 ~ file: app.component.ts:37 ~ AppComponent ~ ngOnInit ~    this.alumnosGrado = data;:",data)
    });

    
    
  }

  eliminarProfesor(id: number) {
    // Llama a tu servicio para eliminar un profesor por ID
    this.apiService.deleteProfesor(id).subscribe(() => {
      // Actualiza la lista después de la eliminación
      this.apiService.getAllProfesores().subscribe((data: any) => {
        this.profesores = data;
      });
    });
  }

  eliminarGrado(id: number) {
    // Llama a tu servicio para eliminar un grado por ID
    this.apiService.deleteGrado(id).subscribe(() => {
      // Actualiza la lista después de la eliminación
      this.apiService.getAllGrados().subscribe((data: any) => {
        this.grados = data;
      });
    });
  }

  eliminarAlumno(id: number) {
    // Llama a tu servicio para eliminar un alumno por ID
    this.apiService.deleteAlumno(id).subscribe(() => {
      // Actualiza la lista después de la eliminación
      this.apiService.getAllAlumnos().subscribe((data: any) => {
        this.alumnos = data;
      });
    });
  }

  eliminarAlumnoGrado(id: number) {
    // Llama a tu servicio para eliminar un alumno en grado por ID
    this.apiService.deleteAlumnoGrado(id).subscribe(() => {
      // Actualiza la lista después de la eliminación
      this.apiService.getAllAlumnosGrado().subscribe((data: any) => {
        this.alumnosGrado = data;
      });
    });
  }


  abrirAgregarEditarProfesorModal() {
   
    const profesor1:Profesor1={
      Id:0,
      Nombre:"",
      Apellido:"",
      Genero:""
    };


    const dataToSend: ProfesorNuevo = {
      esEdicion:false,
       mostrarAgregarEditarProfesorModal:false,
       profesor:profesor1
 
    };


    this.modalService.open(AgregarEditarProfesorComponent, dataToSend);
  }
 
  abrirEditarProfesorModal(profesor:any) {
   
    const profesor1: Profesor1={ 
      Id :profesor.id,
     Nombre:profesor.nombre,
     Apellido:profesor.apellido,
      Genero:profesor.genero,
    }
  
 
   const dataToSend: ProfesorNuevo = {
     esEdicion: true,
     mostrarAgregarEditarProfesorModal: true, // Cambiado a true
     profesor: profesor1,
   };
 
   this.modalService.open(AgregarEditarProfesorComponent, dataToSend);
   }

}


