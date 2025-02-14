import { Outlet } from "react-router";
import { useTheme } from "~/contexts/theme-context";

export default function PublicLayout() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
