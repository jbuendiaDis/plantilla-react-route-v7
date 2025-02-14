import { Button } from "~/ui/shared/atoms/Button";
import { InfoField } from "~/ui/profile/molecules/InfoField";
import type { UserData } from "~/logic/types/user";
import { ProfileImageUploader } from "../molecules/ProfileImageUploader";
import { useState } from "react";

interface PersonalInfoTabProps {
    userData: UserData;
    onUpdate: (field: string, value: string) => void;
}

export const PersonalInfoTab = ({ userData, onUpdate }: PersonalInfoTabProps) => {
    const [imagePreview, setImagePreview] = useState(userData.avatar);
    const handleImageChange = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
                <ProfileImageUploader
                    imagePreview={imagePreview}
                    onImageChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImageChange(file);
                    }}
                />
            </div>
            <InfoField
                label="Nombre"
                value={userData.name}
                editable
                onChange={(value) => onUpdate('name', value)}
            />
            <InfoField
                label="Correo"
                value={userData.email}
                editable
                onChange={(value) => onUpdate('email', value)}
            />
            <InfoField
                label="Teléfono"
                value={userData.phone}
                editable
                onChange={(value) => onUpdate('phone', value)}
            />
            <InfoField
                label="Ciudad"
                value={userData.city}
                editable
                onChange={(value) => onUpdate('city', value)}
            />
            <InfoField
                label="Dirección"
                value={userData.personalInfo.address}
                editable
                onChange={(value) => onUpdate('address', value)}
            />
            <InfoField
                label="Fecha de Registro"
                value={userData.personalInfo.joinDate}
            />
            <div className="md:col-span-2">
                <Button 
                    variant="primary"
                    onClick={() => console.log('Save changes')}
                >
                    Guardar Cambios
                </Button>
            </div>
        </div>
    );
};