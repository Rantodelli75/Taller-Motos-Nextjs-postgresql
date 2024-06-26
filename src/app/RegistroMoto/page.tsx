import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { Navbar } from '@nextui-org/react'
import Registro from '../components/Mimoto/component/mimoto'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  return <div className="scroll-smooth bg-white text-black overflow-x-hidden">
  {data?.user?.email || null}
  <Navbar />
  <Registro/>
</div>
}