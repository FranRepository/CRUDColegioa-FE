// agregar-editar-profesor.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Profesor1 } from '../../models/Profesor1';

@Component({
  selector: 'app-agregar-editar-profesor',
  templateUrl: './agregar-editar-profesor.component.html',
  styleUrls: ['./agregar-editar-profesor.component.css']
})
export class AgregarEditarProfesorComponent implements OnInit {
  @Input() profesor!: Profesor1;
  esEdicion: boolean=false;
  mostrarAgregarEditarProfesorModal: boolean = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // Verificamos si es edición o agregación
    this.esEdicion = this.profesor.Id !== 0;
  }

  guardarProfesor() {
    if (this.esEdicion) {
      // Lógica para editar un profesor
      this.apiService.updateProfesor(this.profesor).subscribe(() => {
      });
    } else {
      // Lógica para agregar un profesor
      this.apiService.insertProfesor(this.profesor).subscribe(() => {
       
      });
    }
    this.mostrarAgregarEditarProfesorModal = false;
    
  }

  cerrarModal() {
    // Lógica para cerrar el modal
    this.mostrarAgregarEditarProfesorModal = false;
  }
}
