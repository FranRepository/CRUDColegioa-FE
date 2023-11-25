// app.component.ts

import { Component, OnInit , ViewChild} from '@angular/core';
import { ApiService } from './shared/services/api.service';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';
import { AgregarEditarProfesorComponent } from '../app/shared/components/agregar-editar-profesor/agregar-editar-profesor.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  profesores: any[] = [];
  grados: any[] = [];
  alumnos: any[] = [];
  alumnosGrado: any[] = [];
  @ViewChild(AgregarEditarProfesorComponent, { static: false })
  agregarEditarProfesorComponent!: AgregarEditarProfesorComponent;



  constructor(private apiService: ApiService,private modalService: NgbModal) { 
    
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
 // Métodos para abrir los modales
 abrirAgregarProfesorModal() {
  // Lógica para abrir el modal de agregar profesor
  $('#agregarProfesorModal').modal('show');
}

abrirEditarProfesorModal(id: number) {
  // Lógica para abrir el modal de editar profesor

  $('#editarProfesorModal').modal('show');
}

profesor: any = {}; // Objeto para almacenar los datos del profesor en el formulario

abrirAgregarEditarProfesorModal() {

  this.modalService.open(this.agregarEditarProfesorComponent.mostrarAgregarEditarProfesorModal);
   
}



}


