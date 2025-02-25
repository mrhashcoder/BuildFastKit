"use client";

import { useState, FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "../providers/strapi-auth-provider";
import { authRegisterLink } from "@/config/links";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

function handleForgetPassword() {
  console.log("Function Not Impleted Yet");
}

export function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const { signIn } = useAuth();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setEmailError(null);
    setPasswordError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const validatedData = formSchema.parse({ email, password });
      const res = await signIn(validatedData.email, validatedData.password);
    } catch (err) {
      if (err instanceof z.ZodError) {
        err.errors.forEach((error) => {
          if (error.path[0] === "email") setEmailError(error.message);
          if (error.path[0] === "password") setPasswordError(error.message);
        });
      } else {
        console.error(err);
        setError("Invalid email or password");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={onSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
              />
              {emailError && (
                <p className="text-sm text-red-500">{emailError}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
              {passwordError && (
                <p className="text-sm text-red-500">{passwordError}</p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button
              variant="link"
              className="text-sm text-muted-foreground hover:text-primary"
              onClick={handleForgetPassword}
            >
              Forgot your password?
            </Button>
            <Button variant="outline" className="w-full">
              <Link href={authRegisterLink.path}>Create an Account</Link>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
