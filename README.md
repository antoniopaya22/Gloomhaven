# Gloomhaven - Gestor de Enemigos

Una aplicación web para gestionar enemigos durante tus partidas de Gloomhaven. Diseñada para ser rápida, intuitiva y accesible desde cualquier dispositivo.

![Astro](https://img.shields.io/badge/Astro-5.1-purple?logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Características

- **Gestión de enemigos**: Añade, duplica y elimina enemigos fácilmente
- **Control de vida**: Modifica la vida con botones rápidos (+/-1, +/-5)
- **Estados de efecto**: Aplica estados negativos (veneno, herida, aturdido, etc.) y positivos (fortalecido, invisible)
- **Estadísticas en tiempo real**: Visualiza el total de enemigos, vida total y estados activos
- **Diseño responsive**: Funciona perfectamente en móvil, tablet y desktop
- **Tema oscuro**: Interfaz elegante con tema oscuro optimizado para sesiones largas
- **Sin dependencias externas**: Todo el CSS está incluido, sin frameworks adicionales

## 🚀 Estructura del Proyecto

```text
/
├── public/
│   └── favicon.svg          # Icono personalizado
├── src/
│   ├── components/
│   │   └── EnemyManager.astro  # Componente principal de gestión
│   ├── layouts/
│   │   └── Layout.astro     # Layout base con sistema de diseño
│   └── pages/
│       └── index.astro      # Página principal
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🎨 Sistema de Diseño

El proyecto utiliza un sistema de diseño basado en CSS Custom Properties (variables CSS):

### Colores
- **Primarios**: Azules (#3366ff) para acciones principales
- **Acentos**: Púrpuras (#a855f7) para elementos destacados
- **Semánticos**: Verde (éxito), Rojo (peligro), Amarillo (advertencia)

### Espaciado
Escala consistente desde `--space-1` (4px) hasta `--space-20` (80px)

### Tipografía
- **Display**: Cinzel (serif) para títulos
- **Body**: Inter (sans-serif) para texto general

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando             | Acción                                              |
| :------------------ | :-------------------------------------------------- |
| `npm install`       | Instala las dependencias                            |
| `npm run dev`       | Inicia el servidor de desarrollo en `localhost:4321`|
| `npm run build`     | Compila el sitio para producción en `./dist/`       |
| `npm run preview`   | Previsualiza la build localmente                    |

## 🎮 Cómo Usar

1. **Añadir enemigos**: Haz clic en "Añadir" e introduce el nombre, número y vida del enemigo
2. **Crear múltiples**: Usa el selector de cantidad para crear varios enemigos a la vez
3. **Gestionar vida**: Usa los botones +/- para modificar la vida rápidamente
4. **Aplicar estados**: Haz clic en los iconos de estado para activar/desactivar efectos
5. **Duplicar**: Duplica un enemigo existente con el siguiente número disponible
6. **Eliminar**: Los enemigos se eliminan automáticamente al llegar a 0 de vida, o manualmente

## 📱 Compatibilidad

- ✅ Chrome / Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ iOS Safari
- ✅ Android Chrome

## 🛠️ Desarrollo

### Requisitos
- Node.js 18+
- npm 9+

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repo>

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📚 Más Información

- [Documentación de Astro](https://docs.astro.build)
- [Reglas de Gloomhaven](https://cephalofair.com/pages/gloomhaven)

## 📄 Licencia

MIT © 2024