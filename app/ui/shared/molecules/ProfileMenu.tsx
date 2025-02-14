import { useState } from "react";
import { Link } from "react-router";
import { useTheme } from "~/contexts/theme-context";

export function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className={`flex items-center space-x-2 p-2 rounded-lg ${
          theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'
        } transition-colors`}
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'
        }`}>
            <svg className={`w-6 h-6 ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
            </svg>

        </div>
        <svg 
          className={`w-4 h-4 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fillRule="evenodd" 
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
            clipRule="evenodd" 
          />
        </svg>
      </button>

      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 ${
          theme === 'light' ? 'bg-white' : 'bg-gray-800'
        } rounded-lg shadow-lg`}>
          <ul className="py-2">
            <li>
              <Link 
                to="/dashboard/profile" 
                className={`flex items-center px-4 py-2 ${
                  theme === 'light' ? 'text-gray-600 hover:bg-gray-100' : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path 
                    fillRule="evenodd" 
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                    clipRule="evenodd" 
                  />
                </svg>
                Profile
              </Link>
            </li>
            <li>
              <Link 
                to="/settings" 
                className={`flex items-center px-4 py-2 ${
                  theme === 'light' ? 'text-gray-600 hover:bg-gray-100' : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path 
                    fillRule="evenodd" 
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" 
                    clipRule="evenodd" 
                  />
                </svg>
                Settings
              </Link>
            </li>
            <li>
              <form action="/logout" method="post">
                <button 
                  type="submit" 
                  className={`w-full flex items-center px-4 py-2 ${
                    theme === 'light' ? 'text-gray-600 hover:bg-gray-100' : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path 
                      fillRule="evenodd" 
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  Logout
                </button>
              </form>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
