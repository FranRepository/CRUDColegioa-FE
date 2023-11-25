import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarAlumnoComponent } from './agregar-editar-alumno.component';

describe('AgregarEditarAlumnoComponent', () => {
  let component: AgregarEditarAlumnoComponent;
  let fixture: ComponentFixture<AgregarEditarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
