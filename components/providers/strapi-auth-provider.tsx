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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const token = Cookies.get("strapi_token"); // Read token from cookies

      if (!token) {
        setUser(null);
        setIsAuthenticated(false);
      }
      if (!user) {
        try {
          const res = await fetch("/api/auth/me");
          if (res.ok) {
            const { user } = await res.json();
            setUser(user);
            setIsAuthenticated(true);
          }
        } catch (error) {
          setUser(null);
          setIsAuthenticated(false);
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
      localStorage.setItem("loggedUser", JSON.stringify(user));
      setIsAuthenticated(true);
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
      setIsAuthenticated(true);
      localStorage.setItem("loggedUser", JSON.stringify(user));
      router.refresh();
    } else {
      throw new Error("Registration failed");
    }
  };

  const signOut = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setIsAuthenticated(false);
    localStorage.setItem("loggedUser", "null");
    Cookies.remove("strapi_token");
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
        isAuthenticated,
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
