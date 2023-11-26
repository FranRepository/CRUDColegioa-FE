import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarProfesorComponent } from './shared/components/agregar-editar-profesor/agregar-editar-profesor.component';
import { AgregarEditarAlumnoComponent } from './shared/components/agregar-editar-alumno/agregar-editar-alumno.component';
import { AgregarEditarGradosComponent } from './shared/components/agregar-editar-grados/agregar-editar-grados.component';
import { AgregarEditarAlumnosEnGradosComponent } from './shared/components/agregar-editar-alumnos-en-grados/agregar-editar-alumnos-en-grados.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Profesor1,ProfesorNuevo } from './shared/models/Profesor1';
@NgModule({
  
  declarations: [
    AppComponent,
    AgregarEditarProfesorComponent,
    AgregarEditarAlumnoComponent,
    AgregarEditarGradosComponent,
    AgregarEditarAlumnosEnGradosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  ,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
