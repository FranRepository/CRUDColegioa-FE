import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarGradosComponent } from './agregar-editar-grados.component';

describe('AgregarEditarGradosComponent', () => {
  let component: AgregarEditarGradosComponent;
  let fixture: ComponentFixture<AgregarEditarGradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarGradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
