'use server';

import prisma from '@/libs/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/dist/server/api-utils';
import { z } from 'zod';


const MotoSchema = z.object({
  marca: z.string(),
  modelo: z.string().max(300),
  placa: z.string(),
  kilometraje: z.string().max(100),
});

export const saveMoto = async (prevState: any, formData: FormData) => {
  const validatedFields = MotoSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const marca = await prisma.marca.create({
      data: {
        marca: validatedFields.data.marca
      }
    })

    const placa = await prisma.placa.create({
      data: {
        placa: validatedFields.data.placa
      }
    })

    const modelo = await prisma.modelo.create({
      data: {
        modelo: validatedFields.data.modelo
      }
    })

    const kilometraje = await prisma.Kilometraje.create({
      data: {
        kilometraje: validatedFields.data.kilometraje
      }
    })


    //Se agregan los datos a la tabla de incidencias (todas las tablas anteriores)

    const getListMoto = await prisma.moto.findFirst({
      include: {
          marca: true,
          fechaInicioIncidencia: true,
          tipoDeIncidencia: true,
          descripcion: true,
          serviciosAfectados: true,
          areasAfectadas: true,
      },
    })

    await prisma.moto.create({
      data: {
        marca: marca,
        modelo: modelo,
        placa: placa,
        kilometraje: kilometraje,
      }
    })

    revalidatePath('./incidencias')
    revalidatePath('./incidencias', undefined) // no se especifica retry
  } catch (error) {
    // Registrar el error y devolver un mensaje de error genérico
    console.error('Error al registrar nueva incidencia:', error)
    return { message: 'Error al registrar nueva incidencia' }
  }
    
/*try {
  await prisma.incidencia.create({
    data: getListIncidencia
  })
  } catch {
    
} */
}
  

  console.log(saveMoto)
