"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { createQuery } from "@/actions/createquery";

export default function ContactUs() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phoneno = formData.get("phone-no") as string;
    const query = formData.get("query") as string;
    try {
      await createQuery({ name, email, phoneno, query });
      router.push("/");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="block max-w-4xl w-full mx-auto my-5 p-6 bg-white border-2 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" name="name" placeholder="John Doe" required />
        </div>
        <div>
          <Label htmlFor="email">Your Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone-no">Phone no.</Label>
          <Input id="phone-no" name="phone-no" placeholder="xxxxx xxxxx" />
        </div>
        <div>
          <Label htmlFor="query">Your Query</Label>
          <Textarea
            id="query"
            name="query"
            placeholder="How can we help you?"
            className="min-h-[200px]"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
