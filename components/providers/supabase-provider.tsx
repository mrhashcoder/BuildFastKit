"use client";
import { createContext, ReactNode, useContext, useEffect } from "react";
import createClient from "./supabase-browser"; // Ensure this imports correctly
import { useRouter } from "next/navigation";
import { SupabaseClient } from "@supabase/supabase-js";

const supabase = createClient();
const SupabaseContext = createContext<SupabaseClient | null>(null);

interface SupabaseProviderProps {
  children: ReactNode;
}

export default function SupabaseProvider({ children }: SupabaseProviderProps) {
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
}

// Define the type for the context
export type SupabaseContextType = SupabaseClient;

export const useSupabase = (): SupabaseContextType => {
  const supabase = useContext(SupabaseContext);
  if (!supabase) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return supabase;
};
