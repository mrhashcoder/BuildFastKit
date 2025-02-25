"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { afterAuthLink, authLink } from "@/config/links";

interface AuthContextProps {
  user: any;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (username: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface StrapiAuthProviderProps {
  children: ReactNode;
}

export default function StrapiAuthProvider({
  children,
}: StrapiAuthProviderProps) {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      console.log("Fetching user");
      setIsLoading(true);
      const token = Cookies.get("strapi_token"); // Read token from cookies

      if (!token) {
        setUser(null);
        setIsLoading(false);
      }
      if (!user) {
        try {
          const res = await fetch("/api/auth/me");
          if (res.ok) {
            const { user } = await res.json();
            setUser(user);
          }
        } catch (error) {
          setUser(null);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchUser();
  }, []);

  const signIn = async (email: string, password: string) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const { user } = await res.json();
      setUser(user);
      router.refresh();
      router.push(afterAuthLink.path);
    } else {
      throw new Error("Login failed");
    }
  };

  const signUp = async (username: string, email: string, password: string) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const { user } = await res.json();
      setUser(user);
      router.refresh();
    } else {
      throw new Error("Registration failed");
    }
  };

  const signOut = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push(authLink.path);
    router.refresh();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signIn,
        signUp,
        signOut,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be used within a StrapiAuthProvider");
  return context;
};
