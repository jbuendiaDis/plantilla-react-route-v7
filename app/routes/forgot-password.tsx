import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'
import { Link, Form } from 'react-router'
import { useTheme } from '~/contexts/theme-context'
import logo from '~/assets/images/logo.jpg'
import logoMobile from '~/assets/images/logo-mobile.jpg'

const ForgotPasswordLayer = () => {
    const { theme } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            // Here would go the API call to send reset password email
            const response = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setIsModalOpen(true);
            } else {
                throw new Error('Failed to send reset email');
            }
        } catch (error) {
            console.error('Error sending reset email:', error);
        }
    };

    return (
        <div className={`min-h-screen flex flex-col lg:flex-row ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}>
            <div className="hidden lg:flex lg:w-1/2 bg-primary-600 items-center justify-center">
                <div className="max-w-lg p-8">
                    <img src={logoMobile} alt="Logo" className="w-100 mx-auto" />
                </div>
            </div>

            <div className={`w-full lg:w-1/2 flex items-center justify-center p-6 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
                <div className="w-full max-w-md">
                    <div className="text-center lg:text-left mb-8">
                        <Link to="/" className="inline-block mb-8">
                            <img src={logo} alt="Logo" className="h-12" />
                        </Link>
                        <h1 className={`text-2xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                            Recuperar Contraseña
                        </h1>
                        <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                            Ingresa el correo electrónico asociado a tu cuenta y te enviaremos
                            un enlace para restablecer tu contraseña.
                        </p>
                    </div>

                    <Form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                                <Icon icon="mage:email" />
                            </span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${theme === 'light' ? 'border-gray-300 bg-white' : 'border-gray-600 bg-gray-700'} focus:ring-2 focus:ring-primary-500`}
                                placeholder="Ingresa tu correo"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={`w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-offset-2 transition-colors ${
                                theme === 'light' 
                                    ? 'bg-[#EC644A] hover:bg-[#1b1b1b] text-white focus:ring-primary-500' 
                                    : 'bg-[#EC644A] hover:bg-[#1b1b1b] text-white focus:ring-primary-400'
                            }`}
                        >
                            Continuar
                        </button>

                        <div className="text-center mt-6">
                            <Link 
                                to="/auth" 
                                className={`font-semibold ${theme === 'light' ? 'text-primary-600' : 'text-primary-400'} hover:underline`}
                            >
                                Regresar al inicio de sesión
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className={`max-w-md w-full rounded-lg p-6 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
                        <div className="text-center">
                            <div className="mb-4">
                                <Icon icon="mdi:email-check" className="w-16 h-16 mx-auto text-primary-500" />
                            </div>
                            <h2 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                                Verifica tu Correo
                            </h2>
                            <p className={`mb-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                                Gracias, revisa tu correo electrónico para ver las instrucciones de restablecimiento de contraseña
                            </p>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className={`w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-offset-2 transition-colors ${
                                    theme === 'light' 
                                        ? 'bg-[#EC644A] hover:bg-[#1b1b1b] text-white focus:ring-primary-500' 
                                        : 'bg-[#EC644A] hover:bg-[#1b1b1b] text-white focus:ring-primary-400'
                                }`}
                            >
                                Cerrar
                            </button>
                            <p className={`mt-4 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                                ¿No recibiste el correo?{" "}
                                <button 
                                    onClick={handleSubmit}
                                    className={`font-semibold ${theme === 'light' ? 'text-primary-600' : 'text-primary-400'} hover:underline`}
                                >
                                    Reenviar
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForgotPasswordLayer;