import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: " App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Welcome />
    </div>
  );
}
