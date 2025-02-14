import { useState } from "react";
import { Outlet } from "react-router";
import { Header } from "~/ui/shared/molecules/Header";
import { Footer } from "~/ui/shared/molecules/Footer";
import { NavigationMenu } from "~/ui/shared/molecules/NavigationMenu";
import { Logo } from "~/ui/shared/atoms/Logo";
import { useTheme } from "~/contexts/theme-context";
import logo from "~/assets/images/logo.jpg";
import logoMobile from "~/assets/images/logo-mobile.jpg";
import type { Route } from "./+types/private";
import { Breadcrumb } from "~/ui/shared/atoms/Breadcrumb";
import { useLocation } from "react-router";
export async function loader({ request }: { request: Request }) {
  // Check for token in cookies instead of localStorage since this runs on server
/*   const userId = await getUserId(request);
  if (!userId) {
    throw redirect("/auth");
  } else {
    return { userId };
  } */
}

export default function PrivateLayout({ loaderData }: Route.ComponentProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const { theme } = useTheme(); 
  const location = useLocation();
  const pathname = location.pathname;
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (window.innerWidth >= 1024) {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    } else {
      setIsMobileMenuActive(!isMobileMenuActive);
    }
  };
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <div className={`flex h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <button
        onClick={toggleSidebar}
        className={`lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg shadow-md ${!isSidebarOpen ? 'visible' : 'invisible'} ${theme === 'light' ? 'text-gray-600 hover:bg-gray-100' : 'text-gray-300 hover:bg-gray-700'}`}
        aria-label="Open menu"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

     

      {/* Sidebar */}
      <aside 
        className={`fixed lg:static left-0 top-0 z-40 h-screen transition-all duration-300 ease-in-out border-r
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isSidebarCollapsed ? 'w-20 lg:w-20' : 'w-80'}
          ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'} shadow-xl`}
        onMouseEnter={() => {
          if (window.innerWidth >= 1024 && isSidebarCollapsed && !isMobileMenuActive) {
            setIsSidebarCollapsed(false);
          }
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 1024 && !isSidebarCollapsed && !isMobileMenuActive) {
            setIsSidebarCollapsed(true);
          }
        }}
      >
        <div className="flex flex-col h-full justify-start items-start p-2">
          <Logo 
            collapsed={isSidebarCollapsed}
            mobileLogo={logoMobile}
            desktopLogo={logo}
            isMobileMenuActive={isMobileMenuActive}
          />
          <NavigationMenu isSidebarCollapsed={isSidebarCollapsed} />
        </div>
        <button
        onClick={toggleSidebar}
        className={`lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg shadow-md ${isSidebarOpen ? 'visible' : 'invisible'} ${theme === 'light' ? 'text-gray-600 hover:bg-gray-100' : 'text-gray-300 hover:bg-gray-700'}`}
        aria-label="Close menu"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header 
          onToggleSidebar={toggleSidebarCollapse}
          isSidebarCollapsed={isSidebarCollapsed}
        />
        
        <main className={`flex-1 overflow-y-auto p-4 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
          <Breadcrumb title={pathname.split('/').pop()?.replace(/\b\w/g, (c) => c.toUpperCase()) || 'Dashboard'} />
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
