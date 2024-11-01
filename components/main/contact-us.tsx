'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useSupabase } from '../providers/supabase-provider'
import { useRouter } from 'next/navigation'

export default function ContactUs() {
    const router = useRouter()
    const supabase = useSupabase();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [query, setQuery] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        try{
            await supabase.from("user-query").upsert([{name, email, query}])
            console.log("done")
            router.push("/");
        } catch (error: any) {
            console.log(error.message)
        }
    console.log('Form submitted:', { name, email, query })
    setName('')
    setEmail('')
    setQuery('')
  }

  return (
    <div className="max-w-xl mx-auto my-5 p-6 bg-white border-2 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Your Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <Label htmlFor="query">Your Query</Label>
          <Textarea
            id="query"
            value={query}
            onChange={(e: any) => setQuery(e.target.value)}
            placeholder="How can we help you?"
            className="min-h-[150px]"
            required
          />
        </div>
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </div>
  )
}