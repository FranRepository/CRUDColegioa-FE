import { ChangeDetectorRef, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Grado1,GradoNuevo } from '../../models/Grado1';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-agregar-editar-grados',
  templateUrl: './agregar-editar-grados.component.html',
  styleUrls: ['./agregar-editar-grados.component.css']
})
export class AgregarEditarGradosComponent implements OnInit {

  @Input() data: any = {
    esEdicion: false, grado: {
      Id: 0,
      Nombre: '',
      ProfesorId: null
    },
    mostrarAgregarEditarGradosModal: true
  };
  @Input() mostrarAgregarEditarGradosModal = true;
  grado: Grado1 = { Id: 0, Nombre: '', ProfesorId:0 };

  @Output() cerrarModalEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor(private apiService: ApiService, private modalService: ModalService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('Data received in AGREGAR GRADOS:', this.data);

    this.grado.Id = this.data.grado.Id;
    this.grado.Nombre = this.data.grado.Nombre;
    this.grado.ProfesorId= this.data.grado.ProfesorId;

    this.data.esEdicion = this.data.grado.Id !== 0;
    this.cdr.detectChanges();
  }

  guardarGrado(datosFormulario: any) {
    console.log("🚀 ~ file: agregar-editar-grados.component.ts:28 ~ AgregarEditarGradosComponent ~  datosFormulario:",  datosFormulario)
    this.grado.Nombre = datosFormulario.nombre;
    this.grado.ProfesorId = datosFormulario.profesorId;

    if (this.data.esEdicion) {
      this.apiService.updateGrado(this.grado).subscribe(() => {
        this.modalService.close();
        location.reload();
      });
    } else {
      this.apiService.insertGrado(this.grado).subscribe(() => {
        this.modalService.close();
        location.reload();
      });
    }
  }

  cerrarModal() {
    this.modalService.close();
  }
}
