import React from 'react';
import { useTheme } from '~/contexts/theme-context';

interface InputProps {
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
    required?: boolean;
    className?: string;
}

export const Input = ({ 
    type = 'text',
    value,
    onChange,
    placeholder,
    label,
    required,
    className = ''
}: InputProps) => {
    const { theme } = useTheme();
    
    return (
        <div>
            {label && (
                <label className={`block text-sm font-semibold mb-2 ${
                    theme === 'light' ? 'text-black' : 'text-white'
                }`}>
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-2 rounded-lg ${
                    theme === 'light'
                        ? 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                        : 'bg-gray-700 border-gray-600 focus:ring-blue-400 focus:border-blue-400'
                } ${className}`}
                placeholder={placeholder}
            />
        </div>
    );
}; 