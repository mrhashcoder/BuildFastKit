'use client'

import { Button } from "@/components/ui/button"
// import { supabase } from "@/lib/supabaseAuth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function SignOut({logout}: any) {

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    // useEffect(() => {

    //     const { data: { subscription } } = supabase.auth.onAuthStateChange(
    //         async (event, session) => {

    //             console.log(event, session)
                
    //             if (event === 'SIGNED_OUT') {
    //                 router.push('/signin');
    //             }
    //         }
    //     )
        
    //     return () => {
    //         subscription.unsubscribe();
    //     };

    // }, [router])

    const handleClick = async () => {
        setIsLoading(true)

        try {
            // const { error } = await supabase.auth.signOut()

            // if (error) {
            //     console.error("Error during signout:", error.message);
            // } else {
            //     console.log("Signout successful");
            // }

            logout()
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