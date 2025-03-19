"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { useAuth } from "@/components/providers/strapi-auth-provider";

const accountFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string()
    .min(1, {
      message: "Please select an email to display.",
    })
    .email("This is not a valid email."),
  bio: z
    .string()
    .max(160, {
      message: "Bio must not be longer than 160 characters.",
    })
    .optional(),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

export default function AccountPage() {
  const { user } = useAuth();

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      username: user?.username || "",
      email: user?.email || "",
      bio: "",
      urls: [{ value: "" }],
    },
  });

  async function onSubmit(data: AccountFormValues) {
    try {
      const result = accountFormSchema.safeParse(data);

      if (!result.success) {
        // Show validation errors
        result.error.errors.forEach((error) => {
          toast.error(error.message);
        });
        return;
      }

      console.log("Form submitted with data:", data);
      toast.success("Accounts updated successfully", {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to update account");
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Your username" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name that will be displayed on your profile and in
                  comments.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                <FormDescription>
                  You can manage verified email addresses in your{" "}
                  <a href="/examples/forms">email settings</a>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tell us a little bit about yourself"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Brief description for your profile. Maximum 160 characters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="urls"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URLs</FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    {field.value?.map((url, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          placeholder="Enter URL"
                          {...field}
                          value={url.value}
                          onChange={(e) => {
                            const newUrls = [...(field.value || [])];
                            newUrls[index] = { value: e.target.value };
                            field.onChange(newUrls);
                          }}
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          onClick={() => {
                            const newUrls = field.value?.filter(
                              (_, i) => i !== index
                            );
                            field.onChange(newUrls);
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        field.onChange([...(field.value || []), { value: "" }]);
                      }}
                    >
                      Add URL
                    </Button>
                  </div>
                </FormControl>
                <FormDescription>
                  Add your social media or personal website URLs.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Update account</Button>
        </form>
      </Form>
    </div>
  );
}
