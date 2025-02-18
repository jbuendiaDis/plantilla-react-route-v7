import { useState } from "react";
import { NavLink } from "~/ui/shared/atoms/NavLink";
import { DropdownMenu } from "./DropdownMenu";
import { useTheme } from "~/contexts/theme-context";

interface NavigationMenuProps {
  isSidebarCollapsed: boolean;
}

export function NavigationMenu({ isSidebarCollapsed }: NavigationMenuProps) {
  const [isUsersMenuOpen, setIsUsersMenuOpen] = useState(false);
  const [isReportsMenuOpen, setIsReportsMenuOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <nav className="flex-1 overflow-y-auto py-4 w-full">
      <ul className="space-y-4 px-3 transition-all duration-300 w-full">
        <li className="mb-6">
          <NavLink to="/dashboard" 
                   icon={<svg className={`w-6 h-6 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5"/>
                        </svg>}>
            <span className={`transition-opacity duration-300 ${isSidebarCollapsed ? 'opacity-0 hidden lg:hidden' : 'opacity-100'} ${theme === 'light' ? 'text-gray-800' : 'text-white'} font-medium text-lg`}>
              Dashboard
            </span>
          </NavLink>
        </li>
        
        <li className="mb-4">
          <DropdownMenu 
            title="Users"
            isOpen={isUsersMenuOpen}
            onToggle={() => {
              setIsUsersMenuOpen(!isUsersMenuOpen);
              setIsReportsMenuOpen(false);
            }}
            isSidebarCollapsed={isSidebarCollapsed}
            items={[
              { to: "/users/new", label: "New User" },
              { to: "/users/manage", label: "Manage Users" }
            ]}
          />
        </li>

        <li className="mb-4">
          <DropdownMenu 
            title="Reports"
            isOpen={isReportsMenuOpen}
            onToggle={() => {
              setIsReportsMenuOpen(!isReportsMenuOpen);
              setIsUsersMenuOpen(false);
            }}
            isSidebarCollapsed={isSidebarCollapsed}
            items={[
              { to: "/reports/daily", label: "Daily Reports" },
              { to: "/reports/weekly", label: "Weekly Reports" },
              { to: "/reports/monthly", label: "Monthly Reports" }
            ]}
          />
        </li>
      </ul>
    </nav>
  );
}
