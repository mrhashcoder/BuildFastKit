import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { authLink, authRegisterLink } from "@/config/links";
import { useAuth } from "../providers/strapi-auth-provider";

interface SingleButtonProps {
  width: Number;
}

export const LoginButton = ({ width }: SingleButtonProps) => {
  return (
    <Link
      href={authLink.path}
      className={`w-[${width}rem] ${cn(buttonVariants({ size: "lg" }))} text-lg font-medium `}
      prefetch={false}
      key={authLink.name}
    >
      {authLink.name}
    </Link>
  );
};
export const LogoutButton = ({ width }: SingleButtonProps) => {
  const { signOut } = useAuth();
  const handleLogout = async () => {
    await signOut();
  };
  return (
    <Link
      href="#"
      className={`w-[${width}rem] ${cn(buttonVariants({ size: "lg" }))} text-lg font-medium `}
      prefetch={false}
      onClick={handleLogout}
    >
      Logout
    </Link>
  );
};
export const SignUpButton = ({ width }: SingleButtonProps) => {
  return (
    <Link
      href={authRegisterLink.path}
      className={`w-[${width}rem] ${cn(buttonVariants({ size: "lg" }))} text-lg font-medium `}
      prefetch={false}
      key={authRegisterLink.name}
    >
      {authRegisterLink.name}
    </Link>
  );
};
