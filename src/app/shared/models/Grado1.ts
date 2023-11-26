// grado.model.ts
export interface Grado1 {
    Id: number;
    Nombre: string;
    ProfesorId: number | null;   
}
export class GradoNuevo {
    Grado!: Grado1 ;
    esEdicion!: boolean;
    mostrarAgregarEditarGradosModal!: boolean;
}
