'use client'

import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabaseAuth"
import { useState } from "react"

export function SignOut() {

    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async () => {
        setIsLoading(true)

        try {

            const { error } = await supabase.auth.signOut()

            if (error) {
                console.error("Error during signout:", error.message);
            } else {
                console.log("Signout successful");
            }

            setIsLoading(false)

        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    return <Button onClick={handleClick} disabled={isLoading}>
        Signout
    </Button>
}