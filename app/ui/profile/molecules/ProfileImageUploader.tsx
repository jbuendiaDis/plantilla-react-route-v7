import { useTheme } from '~/contexts/theme-context';
import { Icon } from '@iconify/react';

interface ProfileImageUploaderProps {
    imagePreview: string;
    onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileImageUploader = ({ imagePreview, onImageChange }: ProfileImageUploaderProps) => {
    const { theme } = useTheme();
    
    return (
        <div className="relative group w-32 h-32">
            <div className="w-32 h-32 rounded-full overflow-hidden">
                <div
                    style={{
                        backgroundImage: `url(${imagePreview})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
            <label className={`absolute inset-0 flex items-center justify-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity ${
                theme === 'light'
                    ? 'bg-black/40 text-white hover:bg-black/50'
                    : 'bg-black/60 text-white hover:bg-black/70'
            }`}>
                <Icon icon="solar:camera-outline" className="w-8 h-8" />
                <input
                    type="file"
                    className="hidden"
                    accept=".png, .jpg, .jpeg"
                    onChange={onImageChange}
                />
            </label>
        </div>
    );
}; 