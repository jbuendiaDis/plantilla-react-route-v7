import { useState } from "react";
import { Button } from "~/ui/shared/atoms/Button";
import { Input } from "~/ui/shared/atoms/Input";

export const PasswordTab = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle password change logic
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md">
            <div className="space-y-4">
                <Input
                    type="password"
                    label="Contraseña Actual"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    label="Nueva Contraseña"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    label="Confirmar Nueva Contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <Button type="submit" variant="primary">
                    Cambiar Contraseña
                </Button>
            </div>
        </form>
    );
};  