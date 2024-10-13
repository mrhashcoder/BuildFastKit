import { createClient } from '@supabase/supabase-js'
import dotenv from "dotenv"
dotenv.config()

// console.log(process.env.NEXT_PUBLIC_SUPABASE_URL )

const supabaseUrl= process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const publicAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = createClient(supabaseUrl, publicAnonKey)

