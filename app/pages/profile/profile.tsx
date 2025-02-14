import { useState } from "react";
import { PersonalInfoTab } from "~/ui/profile/organism/PersonalInfoTab";
import { useTheme } from "~/contexts/theme-context";
import { ProfileCard } from "~/ui/profile/organism/ProfileCard";
import { ProfileTabs } from "~/ui/profile/organism/ProfileTabs";
import { PasswordTab } from "~/ui/profile/organism/PasswordTab";
import { MedicalInfoTab } from "~/ui/profile/organism/MedicalInfoTab";
import userImage from "~/assets/images/useravatar.png";

export const ViewProfileLayer = () => {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState('personal');
    const [userData, setUserData] = useState({
        name: 'Juan Pérez',
        email: 'juan.perez@ejemplo.com',
        phone: '1234567890',
        birthDate: '1990-01-01',
        city: 'Ciudad de México',
        avatar: userImage,
        personalInfo: {
            phone: '1234567890',
            birthDate: '1990-01-01',
            gender: 'Masculino',
            address: 'Calle Principal 123',
            city: 'Ciudad de México',
            joinDate: '2020-01-01',
        },
        medicalInfo: {
            height: '180cm',
            weight: '70kg',
            bloodType: 'A+',
            allergies: 'Ninguna',
            medications: 'Ninguna',
            diseases: 'Ninguna',
            familyHistory: 'Ninguna',
        },
        nutritionalInfo: {
            dietaryRestrictions: 'Ninguna',
            foodPreferences: 'Ninguna',
            mealsPerDay: '3',
            waterIntake: '8 vasos',
            exerciseFrequency: '3 veces por semana',
            exerciseType: 'Yoga, entrenamiento de fuerza',
            weightGoal: 'Perder 5 kilos',
            previousDiets: 'Ninguna'
        }
    });
    const [imagePreview, setImagePreview] = useState(userData.avatar);

    const handleUpdateUserData = (field: string, value: string) => {
        setUserData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'personal':
                return <PersonalInfoTab 
                    userData={userData} 
                    onUpdate={handleUpdateUserData}
                />;
            case 'password':
                return <PasswordTab />;
            case 'medical':
                return <MedicalInfoTab medicalInfo={userData.medicalInfo} nutritionalInfo={userData.nutritionalInfo} />;
            default:
                return null;
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 h-full w-full">
            <div className="lg:col-span-4 h-full">
                <ProfileCard userData={userData} imagePreview={imagePreview} />
            </div>
            <div className="lg:col-span-8 h-full">
                <div className={`rounded-2xl shadow-md h-full ${
                    theme === 'light' ? 'bg-white' : 'bg-gray-800'
                }`}>
                    <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
                    <div className="p-6">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};