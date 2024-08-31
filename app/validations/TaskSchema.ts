
import * as z from "zod";

export const taskSchema = z.object({
  title: z.string().min(1, 'El título es requerido').max(60, 'El título no puede tener más de 60 caracteres'),
  description: z.string().min(5, 'La descripción debe tener al menos 5 caracteres'),
});
