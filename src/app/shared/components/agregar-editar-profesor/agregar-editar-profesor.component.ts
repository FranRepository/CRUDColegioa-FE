// agregar-editar-profesor.component.ts
import {ChangeDetectorRef , Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Profesor1,ProfesorNuevo } from '../../models/Profesor1';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-agregar-editar-profesor',
  templateUrl: './agregar-editar-profesor.component.html',
  styleUrls: ['./agregar-editar-profesor.component.css']
})
export class AgregarEditarProfesorComponent implements OnInit {

  @Input() data:ProfesorNuevo  = new ProfesorNuevo();
  @Input() mostrarAgregarEditarProfesorModal= true; 
  profesor: Profesor1 = { Id: 0,Nombre: '', Apellido: '', Genero: '' };
 
  @Output() cerrarModalEmitter: EventEmitter<void> = new EventEmitter<void>();

  
  constructor(private apiService: ApiService, private modalService: ModalService, private cdr: ChangeDetectorRef) {
    
  }

  ngOnInit() {
    // Verificamos si es edición o agregación
    console.log('Data received in AGREGAR PROFESOR:', this.data);
  
    this.profesor =  this.data.profesor;

    this.data.esEdicion = this.data.profesor.Id !== 0;
  
    // Forzar una actualización de la vista
    this.cdr.detectChanges();
  }

  guardarProfesor(datosFormulario: any) {
    // Establecer los datos del formulario en this.data.profesor
    this.data.profesor.Apellido = datosFormulario.apellido ;
    this.data.profesor.Nombre = datosFormulario.nombre ;
    this.data.profesor.Id = datosFormulario.id ;
    this.data.profesor.Genero = datosFormulario.genero ;

    if (this.data.esEdicion) {
      // Lógica para editar un profesor
      this.apiService.updateProfesor(this.data.profesor).subscribe(() => {
        this.modalService.close();
        location.reload()
      });
    } else {
      // Lógica para agregar un profesor
      this.apiService.insertProfesor(this.data.profesor).subscribe(() => {
        this.modalService.close();
        location.reload()
      });
    }

  }

  cerrarModal() {
    // Cierra el modal
    this.modalService.close();
    location.reload()
  }
  
}
