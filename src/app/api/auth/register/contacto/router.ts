import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(request: { json: () => any }) {
  const data = await request.json();
  console.log(data); 

  const supabase = createClient();

  const { titulo, descripcion } = data;

  const { data: newContacto, error } = await supabase
    .from('Contacto')
    .insert([
      {
        titulo,
        descripcion,
      },
    ]);

  if (error) {
    console.log(data('Error inserting data:', error));
    return NextResponse.json({ error: 'Failed to save data' });
  }

  return NextResponse.json(newContacto);
}
