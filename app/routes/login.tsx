import { useState } from "react";
import { Form, redirect, type MetaFunction } from "react-router";
import type { Route } from "./+types/login";
import { createUserSession, getUserId } from "../logic/services/session/session.server";
import { fetchApi } from "../logic/api/fetchApi";
import type { LoginResponse } from "~/logic/types/sessioon.server.d";
import { useNavigate, Link } from "react-router";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "~/contexts/theme-context";
import logo from "~/assets/images/logo.jpg";
import logoMobile from "~/assets/images/logo-mobile.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "Login" },
    { name: "description", content: "Login to your account" },
  ];
};

export async function loader({ request }: Route.LoaderArgs) {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/");
  }
  return null;
}

export async function action({ request }: Route.ClientActionArgs) {
  let response: Response;
  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const remember = formData.get("remember") === "on";

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    if (!email.includes('@')) {
      throw new Error("Invalid email format");
    }

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }

    const loginResponse : LoginResponse = await fetchApi.post('/auth/login', {
      email,
      password
    });

    if (!loginResponse || !loginResponse.token || !loginResponse.user) {
      throw new Error("Invalid credentials");
    }

    response = await createUserSession({
      request,
      token: loginResponse.token,
      userInfo: {
        id: loginResponse.user.id,
        email: loginResponse.user.email,
        name: loginResponse.user.name,
        role: loginResponse.user.role,
      },
      remember,
    });

    if (!response) {
      throw new Error("An error occurred while creating the session");
    }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }

  throw response;
}

const SignInLayer = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

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
              Inicia Sesión en tu Cuenta
            </h1>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              ¡Bienvenido de vuelta! Por favor ingresa tus datos
            </p>
          </div>

          <Form method="post" className="space-y-6">
            <div className="relative">
              <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                <Icon icon="mage:email" />
              </span>
              <input
                type="email"
                name="email"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${theme === 'light' ? 'border-gray-300 bg-white' : 'border-gray-600 bg-gray-700'} focus:ring-2 focus:ring-primary-500`}
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div className="relative">
              <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                <Icon icon="solar:lock-password-outline" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${theme === 'light' ? 'border-gray-300 bg-white' : 'border-gray-600 bg-gray-700'} focus:ring-2 focus:ring-primary-500`}
                placeholder="Contraseña"
                required
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}
              >
                <Icon icon={showPassword ? "ri:eye-off-line" : "ri:eye-line"} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  className={`mr-2 rounded ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}`}
                />
                <span className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>Recordarme</span>
              </label>
              <Link to="/auth/forgot-password" className="text-sm text-primary-600 hover:text-primary-500">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-offset-2 transition-colors ${
                theme === 'light' 
                  ? 'bg-[#EC644A] hover:bg-[#1b1b1b] text-white focus:ring-primary-500' 
                  : 'bg-[#EC644A] hover:bg-[#1b1b1b] text-white focus:ring-primary-400'
              }`}
            >
              Iniciar Sesión
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignInLayer;