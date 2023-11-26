import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, ComponentRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AgregarEditarProfesorComponent } from '../components/agregar-editar-profesor/agregar-editar-profesor.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalComponentRef: ComponentRef<any> | undefined;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private modalService: NgbModal
  ) {}

  open(component: any, data: any = {}): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.modalComponentRef = factory.create(this.injector);
    this.appRef.attachView(this.modalComponentRef.hostView);
    document.body.appendChild(this.modalComponentRef.location.nativeElement);

    // You can pass data to the modal component here
    this.modalComponentRef.instance.data = data;
  }

  close(): void {
    if (this.modalComponentRef) {
      this.appRef.detachView(this.modalComponentRef.hostView);
      this.modalComponentRef.destroy();
    }

    
  }

  openAgregarEditarProfesorModal(profesorData: any): NgbModalRef {
    const modalRef = this.modalService.open(AgregarEditarProfesorComponent, { size: 'lg' });
    modalRef.componentInstance.profesor = profesorData.profesor;
    modalRef.componentInstance.esEdicion = profesorData.esEdicion;
    modalRef.componentInstance.mostrarAgregarEditarProfesorModal = profesorData.mostrarAgregarEditarProfesorModal;
    return modalRef;
  }

  
}