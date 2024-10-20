"use client";

import {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { useSupabase } from "./supabase-provider";
import { Session, User } from "@supabase/supabase-js";
import useSWR from "swr";
import { useToast } from "@/hooks/use-toast";

// Define the shape of the context
interface AuthContextProps {
  user: User | null | undefined;
  error: string | null;
  isLoading: boolean;
  mutate: () => Promise<User | null>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  getUser: () => Promise<User | null>;
  isAuthenticated: boolean;
}

// Create context with default values
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface SupabaseAuthProviderProps {
  serverSession: Session | null;
  children: ReactNode;
}

export default function SupabaseAuthProvider({
  serverSession,
  children,
}: SupabaseAuthProviderProps) {
  const supabase = useSupabase();
  const router = useRouter();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Sign up function
  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      toast({ title: "Sign Up Erorr", description: error.message });
    } else {
      setIsAuthenticated(true);
    }
  };

  // Sign in function
  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(error);
    if (error) {
      toast({ title: "Sign In Erorr", description: error.message });
    } else {
      setIsAuthenticated(true);
    }
  };

  // Sign out function
  const signOut = async () => {
    setIsAuthenticated(false);
    await supabase.auth.signOut();
  };

  // Get user function
  const getUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) {
      setIsAuthenticated(false);
      return null;
    } else {
      setIsAuthenticated(true);
    }
    return user;
  };

  // Get USER
  // const getUser = async () => {
  //   const { data: user, error } = await supabase
  //     .from("profiles")
  //     .select("*")
  //     .eq("id", serverSession?.user?.id)
  //     .single();
  //   if (error) {
  //     return null;
  //   } else {
  //     return user;
  //   }
  // };

  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR(serverSession ? "profile-context" : null, getUser);

  // Refresh the page to sync server and client
  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_, session: Session | null) => {
        if (session?.access_token !== serverSession?.access_token) {
          router.refresh();
        }
      }
    );

    return () => {};
  }, [router, supabase, serverSession?.access_token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isLoading,
        mutate: getUser,
        signOut,
        signUp,
        signIn,
        getUser,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the Auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a SupabaseAuthProvider");
  }
  return context;
};
