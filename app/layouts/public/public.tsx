import { useState } from "react";
import { Outlet, Link } from "react-router";  

export default function PublicLayout() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('es'); // 'es' or 'en'

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <header className="w-full px-4 py-3 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className="h-8 w-auto"
          />
        </Link>
        
        <div className="flex gap-4">
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-lg p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
