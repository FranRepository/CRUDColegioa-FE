// app.component.ts

import { Component, OnInit , AfterViewInit} from '@angular/core';
import { ApiService } from './shared/services/api.service';
import * as bootstrap from "bootstrap";
import { AgregarEditarProfesorComponent } from '../app/shared/components/agregar-editar-profesor/agregar-editar-profesor.component';
import { AgregarEditarAlumnoComponent } from '../app/shared/components/agregar-editar-alumno/agregar-editar-alumno.component';
import {AgregarEditarAlumnosEnGradosComponent } from '../app/shared/components/agregar-editar-alumnos-en-grados/agregar-editar-alumnos-en-grados.component';
import { ModalService } from 'src/app/shared/services/modal.service';
import { Profesor1,ProfesorNuevo } from './shared/models/Profesor1';
import { Alumno1,AlumnoNuevo } from './shared/models/Alumno1';
import { AlumnoGrado1,AlumnoGradoNuevo } from './shared/models/AlumnoGrado1';
import { AgregarEditarGradosComponent } from './shared/components/agregar-editar-grados/agregar-editar-grados.component';
import { Grado1,GradoNuevo } from './shared/models/Grado1';
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

// app.component.ts

abrirAgregarEditarAlumnoModal() {
  const alumno1: Alumno1 = {
    Id: 0,
    Nombre: "",
    Apellidos: "",
    Genero: "",
    FechaNacimiento: null
  };

  const dataToSend: any = {
    esEdicion: false,
    mostrarAgregarEditarAlumnoModal: false,
    alumno: alumno1
  };

  this.modalService.open(AgregarEditarAlumnoComponent, dataToSend);
}

abrirEditarAlumnosModal(alumno: any) {
  const alumno1: Alumno1 = {
    Id: alumno.id,
    Nombre: alumno.nombre,
    Apellidos: alumno.apellidos,
    Genero: alumno.genero,
    FechaNacimiento: alumno.fechaNacimiento
  };

  const dataToSend: any = {
    esEdicion: true,
    mostrarAgregarEditarAlumnoModal: true,
    alumno: alumno1,
  };

  this.modalService.open(AgregarEditarAlumnoComponent, dataToSend);
}
abrirAgregarEditarAlumnoEnGradoModal() {
  const alumnoEnGrado1: AlumnoGrado1 = {
    Id: 0,
    AlumnoId: null,
    GradoId: null,
    Seccion: ""
  };

  const dataToSend: any = {
    esEdicion: false,
    mostrarAgregarEditarAlumnosEnGradosModal: false,
    alumnoEnGrado: alumnoEnGrado1
  };

  this.modalService.open(AgregarEditarAlumnosEnGradosComponent, dataToSend);
}

abrirEditarAlumnoEnGradoModal(alumnoEnGrado: any) {
  const alumnoEnGrado1: AlumnoGrado1 = {
    Id: alumnoEnGrado.id,
    AlumnoId: alumnoEnGrado.alumnoId,
    GradoId: alumnoEnGrado.gradoId,
    Seccion: alumnoEnGrado.seccion
  };

  const dataToSend: any = {
    esEdicion: true,
    mostrarAgregarEditarAlumnosEnGradosModal: true,
    alumnoEnGrado: alumnoEnGrado1
  };

  this.modalService.open(AgregarEditarAlumnosEnGradosComponent, dataToSend);
}
abrirAgregarEditarGradoModal() {
  const grado1: Grado1 = { Id: 0, Nombre: '', ProfesorId: 0 };
  const dataToSend: any = {
    esEdicion: false,
    mostrarAgregarEditarGradosModal: false,
    grado: grado1
  };
  this.modalService.open(AgregarEditarGradosComponent, dataToSend);
}

abrirEditarGradoModal(grado: any) {
  console.log("🚀 ~ file: app.component.ts:224 ~ AppComponent ~ abrirEditarGradoModal ~ grado:", grado)

  const grado1: Grado1 = {
    Id: grado.id,
    Nombre: grado.nombre,
    ProfesorId: grado.profesorId,
  };


  const dataToSend: any = {
    esEdicion: true,
    mostrarAgregarEditarGradosModal: true,
    grado: grado1
  };
  this.modalService.open(AgregarEditarGradosComponent, dataToSend);
}

}

