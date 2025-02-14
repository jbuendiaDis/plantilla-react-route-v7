interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger';
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit';
    className?: string;
}

export const Button = ({ variant = 'primary', children, onClick, type = 'button', className = '' }: ButtonProps) => {
    const getVariantClasses = () => {
        switch (variant) {
            case 'primary':
                return 'bg-[#EC644A] hover:bg-[#ce705d] text-white dark:bg-[#EC644A] dark:hover:bg-[#ce705d]';
            case 'secondary':
                return 'border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800';
            case 'danger':
                return 'border border-red-500 text-red-500 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-900';
            default:
                return '';
        }
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-8 py-2 rounded-lg transition-colors ${getVariantClasses()} ${className}`}
        >
            {children}
        </button>
    );
}; 