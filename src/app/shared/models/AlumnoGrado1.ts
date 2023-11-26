export interface AlumnoGrado1 {
    Id: number;
    AlumnoId: number | null;
    GradoId: number | null;
    Seccion: string;
  }

  export class AlumnoGradoNuevo {
    alumnoEnGrado!: AlumnoGrado1 ;
    esEdicion!: boolean;
    mostrarAgregarEditarAlumnoModal!: boolean;
  }
  