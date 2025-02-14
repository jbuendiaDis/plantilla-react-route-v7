import { Link, useLocation } from "react-router";
import { useTheme } from "~/contexts/theme-context";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function NavLink({ to, children, icon }: NavLinkProps) {
  const { theme } = useTheme();
  const location = useLocation();
  
  return (
    <Link 
      to={to} 
      className={`flex items-center p-2 rounded-lg transition-all duration-300
        ${theme === 'light' 
          ? 'text-gray-600 hover:bg-gray-100 hover:text-gray-900' 
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }
        ${location.pathname === to && (theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-700 text-white')}
      `}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  );
}
