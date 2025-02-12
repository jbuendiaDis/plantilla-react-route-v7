import { redirect } from "react-router";
import { Outlet } from "react-router";
import { getUserId } from "~/logic/services/session/session.server";
import type { Route } from "./+types/dashboard";

export async function loader({ request }: { request: Request }) {
  // Check for token in cookies instead of localStorage since this runs on server
  const userId = await getUserId(request);
  if (!userId) {
    throw redirect("/auth");
  } else {
    return { userId };
  }
}

// Componente del cliente
export default function PrivateLayout({ loaderData }: Route.ComponentProps) {
  const { userId } = loaderData;
  return userId ? <Outlet /> : null;
}
