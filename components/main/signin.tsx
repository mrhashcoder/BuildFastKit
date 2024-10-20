"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "../providers/supabase-auth-provider";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export function Signin(): React.ReactNode {
  const [error, setError] = useState<{
    success: boolean;
    message: string;
  } | null>();
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null);
    setIsLoading(true);

    // try {
    // const { data, error } = await supabase.auth.signInWithPassword({
    //     email: values.email,
    //     password: values.password,
    // })

    // if (error) {
    //     console.error("Error during signin:", error.message);
    // } else {
    //     console.log("Signin successful:", data);
    //     router.push("/dashboard")
    // }

    try {
      // Simulate login call (replace with actual login logic)
      const res = await signIn(values.email, values.password);
      console.log(res);

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }

  return (
    <div className="rounded-md border border-primary rounded-md shadow-primary shadow-lg p-8">
      <h1 className="text-center font-bold">Login</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 flex items-center flex-col"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="email"
                    {...field}
                    className="bg-forground w-48"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="password"
                    className="bg-forground w-48"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!error?.success && (
            <p className="text-sm text-red-500">{error?.message}</p>
          )}
          <Button type="submit" disabled={isLoading}>
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
