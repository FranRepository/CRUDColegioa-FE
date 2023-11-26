import { ChangeDetectorRef, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AlumnoGrado1,AlumnoGradoNuevo } from '../../models/AlumnoGrado1';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-agregar-editar-alumnos-en-grados',
  templateUrl: './agregar-editar-alumnos-en-grados.component.html',
  styleUrls: ['./agregar-editar-alumnos-en-grados.component.css']
})
export class AgregarEditarAlumnosEnGradosComponent implements OnInit {

  @Input() data: AlumnoGradoNuevo = {
    esEdicion: false, alumnoEnGrado: {
      Id: 0,
      AlumnoId: null,
      GradoId: null,
      Seccion: ''
    },
    mostrarAgregarEditarAlumnoModal: false
  };
  @Input() mostrarAgregarEditarAlumnosEnGradosModal = true;
  alumnoEnGrado: AlumnoGrado1 = { Id: 0, AlumnoId: null, GradoId: null, Seccion: '' };

  @Output() cerrarModalEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor(private apiService: ApiService, private modalService: ModalService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    // Lógica adicional para inicializar el componente según tus necesidades
    this.alumnoEnGrado = this.data.alumnoEnGrado;
    this.data.esEdicion = this.data.alumnoEnGrado.Id !== 0;
    this.cdr.detectChanges();
  }

  guardarAlumnosEnGrados(datosFormulario: any) {
    // Lógica para guardar los alumnos en grados
    datosFormulario
    console.log("🚀 ~ file: agregar-editar-alumnos-en-grados.component.ts:39 ~ AgregarEditarAlumnosEnGradosComponent ~ guardarAlumnosEnGrados ~   datosFormulario",   datosFormulario
)


    this.alumnoEnGrado.AlumnoId = datosFormulario.alumnoId;
    this.alumnoEnGrado.GradoId = datosFormulario.gradoId;
    this.alumnoEnGrado.Seccion = datosFormulario.seccion;

    // Lógica para guardar o editar el alumno en grado usando apiService
    if (this.data.esEdicion) {
      this.apiService.updateAlumnoGrado(this.alumnoEnGrado).subscribe(() => {
        this.modalService.close();
        location.reload();
      });
    } else {
      this.apiService.insertAlumnoGrado(this.alumnoEnGrado).subscribe(() => {
        this.modalService.close();
        location.reload();
      });
    }
  }

  cerrarModal() {
    // Cierra el modal
    this.modalService.close();
  }
}
