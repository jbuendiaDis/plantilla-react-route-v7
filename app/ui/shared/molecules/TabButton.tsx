import { useTheme } from '~/contexts/theme-context';

interface TabButtonProps {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

export const TabButton = ({ active, onClick, children }: TabButtonProps) => {
    const { theme } = useTheme();
    
    return (
        <button
            onClick={onClick}
            className={`inline-block p-4 ${
                active 
                    ? theme === 'light' 
                        ? 'text-[#EC644A] border-b-2 border-[#EC644A]'
                        : 'text-[#EC644A] border-b-2 border-[#EC644A]'
                    : theme === 'light'
                        ? 'text-gray-500 hover:text-gray-600'
                        : 'text-gray-400 hover:text-gray-300'
            }`}
        >
            {children}
        </button>
    );
}; 