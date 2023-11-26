import { ChangeDetectorRef, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Alumno1 } from '../../models/Alumno1';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-agregar-editar-alumno',
  templateUrl: './agregar-editar-alumno.component.html',
  styleUrls: ['./agregar-editar-alumno.component.css']
})
export class AgregarEditarAlumnoComponent implements OnInit {

  @Input() data: any = { esEdicion: false, alumno: {} };
  @Input() mostrarAgregarEditarAlumnoModal = true;
  alumno: Alumno1 = { Id: 0, Nombre: '', Apellidos: '', Genero: '', FechaNacimiento: null };

  @Output() cerrarModalEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor(private apiService: ApiService, private modalService: ModalService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.alumno = this.data.alumno;
    this.data.esEdicion = this.data.alumno.Id !== 0;
    this.cdr.detectChanges();
  }

  guardarAlumno(datosFormulario: any) {
    this.data.alumno.Apellidos = datosFormulario.apellidos;
    this.data.alumno.Nombre = datosFormulario.nombre;
    this.data.alumno.Id = datosFormulario.id;
    this.data.alumno.Genero = datosFormulario.genero;
    this.data.alumno.FechaNacimiento = datosFormulario.fechaNacimiento;

    if (this.data.esEdicion) {
      this.apiService.updateAlumno(this.data.alumno).subscribe(() => {
        this.modalService.close();
        location.reload();
      });
    } else {
      this.apiService.insertAlumno(this.data.alumno).subscribe(() => {
        this.modalService.close();
        location.reload();
      });
    }
  }

  cerrarModal() {
    this.modalService.close();
    location.reload();
  }

}
