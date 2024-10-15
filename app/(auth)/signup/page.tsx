import { Signup } from "@/components/main/signup";
import React from "react";
import { signup } from "@/lib/supabaseService";

const page = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Signup signup={signup} />
    </div>
  );
};

export default page;
