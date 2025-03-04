# Hotel Gestor App

## Descripción
Hotel Gestor App es una aplicación desarrollada en React que permite la gestión de reservas de hoteles, proporcionando un sistema de booking, un dashboard administrativo y una página de inicio (landing page) para los usuarios.

## Características
- **Landing Page:** Presentación del servicio con información relevante para los usuarios.
- **Sistema de Reservas (Booking):** Permite a los usuarios realizar y gestionar reservas en los hoteles disponibles.
- **Dashboard:** Interfaz administrativa para la gestión de reservas, clientes y configuraciones del sistema.

## Requisitos
Antes de ejecutar la aplicación, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión recomendada: 16 o superior)
- [npm](https://www.npmjs.com/) (se instala con Node.js)

## Instalación
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/jamesgoc03/Gestor-Application.git
   cd hotel-gestor-app
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```

## Ejecución
Para iniciar la aplicación en modo de desarrollo, ejecuta:
```sh
npm run dev
```
Esto iniciará el servidor de desarrollo y la aplicación estará disponible en `http://localhost:5173/` (o el puerto asignado por Vite).

## Construcción para Producción
Para generar una versión optimizada para producción:
```sh
npm run build
```
Esto generó los archivos en la carpeta `dist/`.

## Tecnologías Utilizadas
- React
- Vite
- React Router (para la navegación)
- Tailwind CSS (para estilos)
- Context API / Redux (para gestión de estado, según implementación)
