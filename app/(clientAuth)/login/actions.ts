'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabaseAuth'

export async function login(value: any) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: value.email,
    password: value.password
  }

  const { error, } = await supabase.auth.signInWithPassword(data)

  if (error) {
    // redirect('/error')
    console.log(error.message)
    return { success: false, message: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

// export async function signup(formData: FormData) {
//   const supabase = createClient()

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   }

//   const { error } = await supabase.auth.signUp(data)

//   if (error) {
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/')
// }