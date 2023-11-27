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
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);//Angular : Utiliza el ComponentFactoryResolver para resolver la fábricacion de componentes del componente que se pasa como argumento (component).
    this.modalComponentRef = factory.create(this.injector);//Angular :: Crea una instancia del componente utilizando la fábrica de componentes
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



  
}