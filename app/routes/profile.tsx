import type { Route } from "./+types/profile";
import { ViewProfileLayer } from "~/pages/profile/profile";
export function meta({}: Route.MetaArgs) {
  return [{ title: "Perfil" }];
}

export default function Profile() {
  return (
    <div className="container mx-auto">  
      <ViewProfileLayer />
   </div>
  );
}
