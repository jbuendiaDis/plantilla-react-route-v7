import type { Route } from "./+types/login";
import { SingIn } from "../pages/auth/singin";



export function meta({}: Route.MetaArgs) {
  return [{ title: "Login" }];
}

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SingIn />
    </div>
  );
}

