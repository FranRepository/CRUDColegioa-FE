import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarAlumnosEnGradosComponent } from './agregar-editar-alumnos-en-grados.component';

describe('AgregarEditarAlumnosEnGradosComponent', () => {
  let component: AgregarEditarAlumnosEnGradosComponent;
  let fixture: ComponentFixture<AgregarEditarAlumnosEnGradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarAlumnosEnGradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarAlumnosEnGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
