import type { Route } from "./+types/register";
import { SingUp } from "../pages/auth/singup";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Registro" }];
}

export default function Register() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SingUp />
    </div>

  );
}
