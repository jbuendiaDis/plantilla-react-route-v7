import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Dashboard" }];
}

export default function Dashboard() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card de estadísticas */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Estadísticas</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Visitas</span>
              <span className="font-medium dark:text-white">1,234</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Usuarios</span>
              <span className="font-medium dark:text-white">567</span>
            </div>
          </div>
        </div>

        {/* Card de actividad reciente */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Actividad Reciente</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-300">Nueva actualización del sistema</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-300">5 nuevos usuarios registrados</span>
            </div>
          </div>
        </div>

        {/* Card de tareas pendientes */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Tareas Pendientes</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
              <span className="text-gray-600 dark:text-gray-300">Revisar reportes mensuales</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
              <span className="text-gray-600 dark:text-gray-300">Actualizar documentación</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
