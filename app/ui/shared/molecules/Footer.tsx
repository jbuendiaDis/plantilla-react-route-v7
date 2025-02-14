import { useTheme } from "~/contexts/theme-context";

export function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`flex flex-row items-center justify-between ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-sm p-4`}>
      <div className={`text-center ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} text-sm`}>
        © 2025 Nutrition-lab. All rights reserved.
      </div>
      <div className={`text-center ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} text-sm`}>
        Developed by <a href="https://axolotlcode.tech" className="text-pink-500 hover:text-pink-600">axolotlcode</a>
      </div>
    </footer>
  );
}
