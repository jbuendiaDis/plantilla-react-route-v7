import { ThemeToggle } from "~/ui/shared/atoms/theme-toggle";
import { ProfileMenu } from "./ProfileMenu";
import { useTheme } from "~/contexts/theme-context";

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarCollapsed: boolean;
}

export function Header({ onToggleSidebar, isSidebarCollapsed }: HeaderProps) {
  const { theme } = useTheme();

  return (
    <header className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-sm h-16`}>
      <div className="flex items-center justify-between px-4 h-full">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className={`p-2 rounded-lg hidden lg:block ${theme === 'light' ? 'text-gray-600 hover:bg-gray-100' : 'text-gray-300 hover:bg-gray-700'}`}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{
                transform: isSidebarCollapsed ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
