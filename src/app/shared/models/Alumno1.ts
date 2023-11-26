export interface Alumno1 {
    Id: number;
    Nombre: string;
    Apellidos: string;
    Genero: string;
    FechaNacimiento: Date | null;  
 }

 export class AlumnoNuevo {
    alumno!: Alumno1 ;
    esEdicion!: boolean;
    mostrarAgregarEditarAlumnoModal!: boolean;
  }
  