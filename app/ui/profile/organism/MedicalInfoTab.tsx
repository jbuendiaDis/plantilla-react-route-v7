import type { UserData } from "~/logic/types/user";
import { InfoField } from "../molecules/InfoField";

interface MedicalInfoTabProps {
    medicalInfo: UserData['medicalInfo'];
    nutritionalInfo: UserData['nutritionalInfo'];
}

export const MedicalInfoTab = ({ medicalInfo, nutritionalInfo }: MedicalInfoTabProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoField label="Altura" value={medicalInfo.height} />
            <InfoField label="Peso" value={medicalInfo.weight} />
            <InfoField label="Tipo de Sangre" value={medicalInfo.bloodType} />
            <InfoField label="Alergias" value={medicalInfo.allergies} />
            <InfoField label="Medicamentos" value={medicalInfo.medications} />
            <InfoField label="Enfermedades" value={medicalInfo.diseases} />
            <InfoField 
                label="Historial Familiar" 
                value={medicalInfo.familyHistory}
            />
            <InfoField 
                label="Restricciones Dietéticas" 
                value={nutritionalInfo.dietaryRestrictions}
            />
            <InfoField 
                label="Preferencias Alimentarias" 
                value={nutritionalInfo.foodPreferences}
            />
            <InfoField 
                label="Comidas por Día" 
                value={nutritionalInfo.mealsPerDay}
            />
            <InfoField 
                label="Consumo de Agua" 
                value={nutritionalInfo.waterIntake}
            />
            <InfoField 
                label="Frecuencia de Ejercicio" 
                value={nutritionalInfo.exerciseFrequency}
            />
            <InfoField 
                label="Tipo de Ejercicio" 
                value={nutritionalInfo.exerciseType}
            />
            <InfoField 
                label="Meta de Peso" 
                value={nutritionalInfo.weightGoal}
            />
        </div>
    );
};