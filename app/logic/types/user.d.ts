export interface UserData {
    name: string;
    email: string;
    phone: string;
    birthDate: string;
    city: string;
    avatar: string;
    personalInfo: {
        phone: string;
        birthDate: string;
        gender: string;
        address: string;
        city: string;
        joinDate: string;
    };
    medicalInfo: {
        height: string;
        weight: string;
        bloodType: string;
        allergies: string;
        medications: string;
        diseases: string;
        familyHistory: string;
    };
    nutritionalInfo: {
        dietaryRestrictions: string;
        foodPreferences: string;
        mealsPerDay: string;
        waterIntake: string;
        exerciseFrequency: string;
        exerciseType: string;
        weightGoal: string;
        previousDiets: string;
    };
}
