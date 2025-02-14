import { useTheme } from '~/contexts/theme-context';
import type { UserData } from '~/logic/types/user';
import { ProfileImage } from '~/ui/profile/atoms/ProfileImage';

interface ProfileCardProps {
    userData: UserData;
    imagePreview: string;
}

export const ProfileCard = ({ userData, imagePreview }: ProfileCardProps) => {
    const { theme } = useTheme();
    
    return (
        <div className={`relative rounded-2xl overflow-hidden shadow-md h-full ${
            theme === 'light' ? 'bg-white' : 'bg-gray-800'
        }`}>
            {/* Cover Photo */}
            <div className="h-48 bg-gradient-to-r from-[#ce705d] to-[#f8aea0]"></div>
            
            {/* Profile Image */}
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
                <div className="p-1 bg-white rounded-full">
                    <ProfileImage 
                        src={imagePreview} 
                        alt="Profile"
                        className="w-40 h-40 rounded-full border-4 border-white"
                    />
                </div>
            </div>

            {/* Profile Info */}
            <div className="pt-24 p-6 text-center">
                <h2 className={`text-3xl font-bold mb-2 ${
                    theme === 'light' ? 'text-gray-800' : 'text-white'
                }`}>
                    {userData.name}
                </h2>
                <p className={`text-lg mb-4 ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                    {userData.email}
                </p>
                
                <div className={`grid grid-cols-2 gap-4 mt-6 pt-6 border-t ${
                    theme === 'light' ? 'border-gray-200' : 'border-gray-700'
                }`}>
                    <div>
                        <p className={`text-sm ${
                            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                        }`}>Ciudad</p>
                        <p className="font-medium">{userData.city}</p>
                    </div>
                    <div>
                        <p className={`text-sm ${
                            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                        }`}>Teléfono</p>
                        <p className="font-medium">{userData.phone}</p>
                    </div>
                    <div>
                        <p className={`text-sm ${
                            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                        }`}>Fecha de Nacimiento</p>
                        <p className="font-medium">{userData.birthDate}</p>
                    </div>
                    <div>
                        <p className={`text-sm ${
                            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                        }`}>Miembro desde</p>
                        <p className="font-medium">{userData.personalInfo.joinDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}; 