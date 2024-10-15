import { Signin } from "@/components/main/signin";
import { login } from "@/lib/supabaseService";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Signin login={login} />
    </div>
  );
};

export default page;

// export default function LoginPage() {
//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input id="email" name="email" type="email" required />
//       <label htmlFor="password">Password:</label>
//       <input id="password" name="password" type="password" required />
//       <button formAction={login}>Log in</button>
//       <button formAction={signup}>Sign up</button>
//     </form>
//   )
// }
