import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarProfesorComponent } from './agregar-editar-profesor.component';

describe('AgregarEditarProfesorComponent', () => {
  let component: AgregarEditarProfesorComponent;
  let fixture: ComponentFixture<AgregarEditarProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
