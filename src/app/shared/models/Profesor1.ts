export class Profesor1 {
    Id!: number;
    Nombre!: string;
    Apellido!: string;
    Genero!: string; 
 
  }


  export class ProfesorNuevo {
  profesor!: Profesor1 ;
  esEdicion!: boolean;
  mostrarAgregarEditarProfesorModal!: boolean;
}

