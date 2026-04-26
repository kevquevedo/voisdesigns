<div align="center">
  <h1>🪵 Vois Designs</h1>
  <p>Sitio web institucional de carpintería fina y muebles a medida</p>

  <a href="https://voisdesigns.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge" alt="Demo" />
  </a>
  <img src="https://img.shields.io/badge/Angular-21.2-red?style=for-the-badge&logo=angular" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/deployed_on-Vercel-black?style=for-the-badge&logo=vercel" />
  <img src="https://img.shields.io/badge/status-en%20construcción-orange?style=for-the-badge" />
</div>

> ⚠️ **Sitio en construcción** — actualmente en desarrollo activo. Algunas secciones pueden estar incompletas.


---

## 📸 Preview

![Preview del sitio](https://github.com/user-attachments/assets/d93feadb-48e7-4729-a323-12bd5405562b)

---

## 🧰 Stack

| Tecnología | Versión | Uso |
|---|---|---|
| Angular | 21.2 | Framework principal |
| Tailwind CSS | 3.4 | Utilidades de estilo |
| SCSS | — | Variables y estilos globales |
| Vitest | — | Unit testing |
| Vercel | — | Deploy y hosting |

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── about/          # Sección sobre la marca
│   │   ├── collections/    # Catálogo de colecciones
│   │   ├── custom/         # Trabajos a medida
│   │   ├── footer/         # Pie de página
│   │   ├── hero/           # Sección principal / banner
│   │   ├── index-strip/    # Franja separadora
│   │   ├── nav/            # Navegación
│   │   └── projects/       # Proyectos realizados
│   ├── data/               # Datos estáticos (mocks, constantes)
│   ├── directives/         # Directivas reutilizables (ej: reveal)
│   └── models/             # Interfaces y tipos TypeScript
└── styles.scss             # Design tokens y variables CSS globales
```

## 🚀 Desarrollo local

```bash
# 1. Clonar el repositorio
git clone https://github.com/kevquevedo/voisdesigns.git
cd voisdesigns

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
ng serve
```

Abrí el navegador en `http://localhost:4200`

---

## 🏗️ Build de producción

```bash
ng build
```

Los archivos compilados se generan en `/dist`.

---

## 🧪 Tests

```bash
ng test
```

---

## 📄 Licencia

MIT
