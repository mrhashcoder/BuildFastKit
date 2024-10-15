"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/subabaseClient"
import { afterAuthLink, authLink } from "@/config/links"

export async function login(value: any) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: value.email,
    password: value.password,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    // redirect('/error')
    console.log(error.message)
    return { success: false, message: error.message }
  }

  revalidatePath("/", "layout")
  redirect(afterAuthLink.path)
}

export async function signup(value: any) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: value.email,
    password: value.password,
  }

  const { error } = await supabase.auth.signUp(data)
  console.log(error)

  if (error) {
    redirect("/error")
  }

  revalidatePath("/", "layout")
  redirect(afterAuthLink.path)
}

export async function logout() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect("/error")
  }

  revalidatePath("/", "layout")
  redirect(authLink.path)
}

export async function getAuthUser() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error) {
    console.log(error)
    return null
  }

  return data
}
