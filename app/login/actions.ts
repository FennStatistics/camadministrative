'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'


export async function login(formData: FormData) {
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
    redirect('/private')
  }
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data_sent = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        first_name: 'John',
        age: formData.get('age') as string,
      }
    }
  }

  // https://supabase.com/docs/reference/javascript/auth-signup

  console.log("signup data", data_sent)

  const { error } = await supabase.auth.signUp(data_sent)

  console.log("signup error", error)


  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}