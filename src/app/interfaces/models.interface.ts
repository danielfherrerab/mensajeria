export interface RegisterData {
  id?: string,
  name: string,
  email: string,
  role: string,
}

export interface OrderData {
  uid: string,
  descripcion: string | null,
  fechaRequerida: Date | null,
  estado:  'pendiente' | 'completado' | 'reprogramado',
  visto: boolean,
  prioridad: number
}