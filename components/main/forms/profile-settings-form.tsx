"use client";

import { z } from "zod";
import {
  Controller,
  FormProvider,
  useFormContext,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const profileFormSchema = z.object({
  username: z.string().min(2).max(30),
  email: z.string().email(),
  bio: z.string().max(160).min(4),
  urls: z.array(z.object({ value: z.string().url() })),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  bio: "I own a computer.",
  urls: [
    { value: "https://shadcn.com" },
    { value: "http://twitter.com/shadcn" },
  ],
};

function FormField<T extends keyof ProfileFormValues>({
  name,
  label,
  children,
}: {
  name: T;
  label: string;
  children: (field: {
    value: ProfileFormValues[T];
    onChange: (value: any) => void;
  }) => JSX.Element;
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          <label className="block font-medium">{label}</label>
          {children(field)}
          {errors[name] && (
            <p className="text-red-500 text-sm">
              {(errors[name] as any)?.message}
            </p>
          )}
        </div>
      )}
    />
  );
}

export default function ProfileSettingForm() {
  const methods = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    let resp = profileFormSchema["~validate"](data);
    console.log(resp);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 p-4 bg-gray-900 text-white rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      ),
    });
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <FormField name="username" label="Username">
          {(field) => <Input placeholder="shadcn" {...field} />}
        </FormField>

        <FormField name="email" label="Email">
          {(field) => (
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value as string}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="m@example.com">m@example.com</SelectItem>
                <SelectItem value="m@google.com">m@google.com</SelectItem>
                <SelectItem value="m@support.com">m@support.com</SelectItem>
              </SelectContent>
            </Select>
          )}
        </FormField>

        <FormField name="bio" label="Bio">
          {(field) => (
            <Textarea
              placeholder="Tell us about yourself"
              {...field}
              className="resize-none"
            />
          )}
        </FormField>

        <FormField name="urls" label="URLs">
          {(field) => {
            const {
              formState: { errors },
            } = useFormContext();
            return (
              <div>
                {Array.isArray(field.value) &&
                  field.value.map((url, index) => (
                    <div key={index} className="flex gap-2 mt-2">
                      <Input
                        value={url.value}
                        onChange={(e) => {
                          const newUrls = [...(field.value || [])];
                          newUrls[index] = { value: e.target.value };
                          field.onChange(newUrls);
                        }}
                      />
                      <Button
                        type="button"
                        onClick={() => {
                          const newUrls = (field.value || []).filter(
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
                  className="mt-2"
                  onClick={() =>
                    field.onChange([...(field.value || []), { value: "" }])
                  }
                >
                  Add URL
                </Button>
                {errors.urls && (
                  <p className="text-red-500 text-sm">
                    {(errors.urls as any)?.message}
                  </p>
                )}
              </div>
            );
          }}
        </FormField>

        <Button type="submit">Update profile</Button>
      </form>
    </FormProvider>
  );
}
