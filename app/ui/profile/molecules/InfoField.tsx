import { Input } from "~/ui/shared/atoms/Input";
import { useTheme } from "~/contexts/theme-context";
interface InfoFieldProps {
    label: string;
    value: string;
    editable?: boolean;
    onChange?: (value: string) => void;
}

export const InfoField = ({ label, value, editable = false, onChange }: InfoFieldProps) => {
    const { theme } = useTheme();
    
    return (
        <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
                {label}
            </label>
            {editable ? (
                <Input
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    className="w-full"
                />
            ) : (
                <p className={`py-2 ${
                    theme === 'light' ? 'text-gray-900' : 'text-gray-100'
                }`}>
                    {value}
                </p>
            )}
        </div>
    );
};