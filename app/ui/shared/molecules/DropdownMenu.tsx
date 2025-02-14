import { Link } from "react-router";
import { useTheme } from "~/contexts/theme-context";

interface DropdownMenuItem {
  to: string;
  label: string;
}

interface DropdownMenuProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  isSidebarCollapsed: boolean;
  items: DropdownMenuItem[];
  icon?: React.ReactNode;
}

export function DropdownMenu({ 
  title, 
  isOpen, 
  onToggle, 
  isSidebarCollapsed, 
  items,
  icon = (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
  )
}: DropdownMenuProps) {
  const { theme } = useTheme();

  return (
    <li className="transition-all duration-300" style={{ marginBottom: isOpen ? '1rem' : '0' }}>
      <button 
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-2 rounded-lg transition-all duration-300
          ${theme === 'light'
            ? 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }
          ${isOpen && (theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-700 text-white')}
        `}
      >
        <div className="flex items-center">
          {icon}
          <span className={`transition-opacity duration-300 ${
            isSidebarCollapsed ? 'opacity-0 hidden lg:hidden' : 'opacity-100'
          }`}>
            {title}
          </span>
        </div>
        {!isSidebarCollapsed && (
          <svg 
            className={`w-4 h-4 transition-transform duration-300`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            )}
          </svg>
        )}
      </button>
      
      <div 
        className={`pl-8 mt-2 space-y-1 transition-all duration-300 overflow-hidden`}
        style={{
          maxHeight: isSidebarCollapsed || !isOpen ? '0' : '200px',
          opacity: isSidebarCollapsed || !isOpen ? '0' : '1',
          visibility: isSidebarCollapsed || !isOpen ? 'hidden' : 'visible'
        }}
      >
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center p-2 rounded-lg transition-all duration-300
              ${theme === 'light' 
                ? 'text-gray-600 hover:bg-gray-100 hover:text-gray-900' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }
            `}
          >
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </li>
  );
}
