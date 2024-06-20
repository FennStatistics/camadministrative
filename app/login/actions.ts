'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { sign } from 'crypto'


export async function login(formData: FormData) {
  console.log("login formData", formData)
  const supabase = createClient()
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }else{
    //revalidatePath('/', 'page')
    revalidatePath('/', 'layout')
    //revalidatePath('/prive/post/[slug]', 'layout')
    redirect('/dashboard')
  }
}