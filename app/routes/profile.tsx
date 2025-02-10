import type { Route } from "./+types/profile";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Perfil" }];
}

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {/* Header del perfil */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full">
            {/* Placeholder para la foto de perfil */}
          </div>
          <div>
            <h1 className="text-2xl font-bold dark:text-white">Nombre Usuario</h1>
            <p className="text-gray-600 dark:text-gray-300">usuario@email.com</p>
          </div>
        </div>

        {/* Información del perfil */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3 dark:text-white">Información Personal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">Nombre completo:</p>
                <p className="font-medium dark:text-white">Nombre Apellido</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">Teléfono:</p>
                <p className="font-medium dark:text-white">+1 234 567 890</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">Ubicación:</p>
                <p className="font-medium dark:text-white">Ciudad, País</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">Miembro desde:</p>
                <p className="font-medium dark:text-white">Enero 2023</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-colors">
              Editar Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
