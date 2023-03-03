import { Timestamp } from "firebase/firestore";

export interface RegisterData {
  id?: string,
  name: string,
  email: string,
  role: string,
}

export interface OrderData {
  id: string,
  descripcion: string,
  fechaRequerida: Timestamp,
  estado:  'pendiente' | 'completado' | 'reprogramado',
  visto: boolean,
  prioridad: number
}