# Newsletter Signup

## Descripción
Este proyecto es una aplicación web que permite a los usuarios suscribirse a un boletín informativo. Incluye un formulario de suscripción y un modal de confirmación que notifica al usuario cuando se ha enviado un correo de confirmación.

## Estructura del Proyecto

```
newsletter-signup/
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── public/
│   └── vite.svg
├── src/
│   ├── index.css
│   ├── sign-up.js
│   ├── assets/
│   │   └── img/
│   │       └── banner-desktop.jpg
│   ├── components/
│   │   ├── modal/
│   │   │   ├── modal-suscribe-styles.js
│   │   │   └── modal-suscribe.js
│   │   └── suscribe-form/
│   │       ├── suscribe-form.js
│   │       └── suscribe-styles.js
```

## Componentes

### 1. **Suscribe Form**
- Ubicación: `src/components/suscribe-form/`
- Descripción: Este componente contiene el formulario de suscripción donde los usuarios pueden ingresar su correo electrónico.
- Archivos:
  - `suscribe-form.js`: Lógica del formulario.
  - `suscribe-styles.js`: Estilos del formulario.

### 2. **Modal Suscribe**
- Ubicación: `src/components/modal/`
- Descripción: Este componente muestra un modal de confirmación después de que el usuario se suscribe.
- Archivos:
  - `modal-suscribe.js`: Lógica del modal.
  - `modal-suscribe-styles.js`: Estilos del modal.

### 3. **Sign Up**
- Ubicación: `src/sign-up.js`
- Descripción: Componente principal que gestiona la interacción entre el formulario y el modal.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd newsletter-signup
   ```

3. Instala las dependencias:
   ```bash
   pnpm install
   ```

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Genera una versión optimizada para producción.
- `pnpm preview`: Previsualiza la versión de producción.

## Tecnologías Utilizadas

- **Lit**: Framework para crear componentes web.
- **Vite**: Herramienta de construcción rápida para proyectos web.

## Cómo Usar

1. Inicia el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

2. Abre tu navegador y navega a `http://localhost:5173`.

3. Llena el formulario con tu correo electrónico y haz clic en "Subscribe to monthly newsletter".

4. Verifica el modal de confirmación.

## Estructura de Estilos

- `src/index.css`: Estilos globales.
- `suscribe-styles.js`: Estilos específicos para el formulario de suscripción.
- `modal-suscribe-styles.js`: Estilos específicos para el modal.

## Recursos

- Imagen de banner: `src/assets/img/banner-desktop.jpg`


