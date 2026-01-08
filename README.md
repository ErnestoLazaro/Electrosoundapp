# 🎧 Electrosound - Tienda de Música Electrónica Alternativa

<div align="center">
  <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=400&fit=crop" alt="Electrosound Banner" />
  
  ### 🎵 Descubre el Sonido del Futuro
  
  Una plataforma moderna de e-commerce especializada en música electrónica alternativa, EBM, Industrial y Techno.
  
  [![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
  [![Motion](https://img.shields.io/badge/Motion-12.23-ff0055)](https://motion.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Inicio Rápido](#-inicio-rápido)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Sistema de Diseño](#-sistema-de-diseño)
- [Stack Tecnológico](#-stack-tecnológico)
- [Secciones](#-secciones)
- [Funciones Clave](#-funciones-clave)
- [Desarrollo](#-desarrollo)
- [Documentación](#-documentación)
- [Mejoras Futuras](#-mejoras-futuras)
- [Contribuciones](#-contribuciones)
- [Licencia](#-licencia)
- [Autor](#-autor)

---

## ✨ Características

### 🎨 Diseño Cyberpunk/Electrónico
- **Gradientes Vibrantes**: Paleta de colores purple/blue con acentos neon (#eff6b2)
- **Efectos Glassmorphism**: Transparencias y desenfoque de fondo para un look moderno
- **Bordes Neon**: Efectos de borde brillantes que se activan con hover
- **Animaciones Fluidas**: Transiciones suaves con Motion (Framer Motion)

### 🛒 E-Commerce Completo
- ✅ Carrito de compras con gestión de cantidad
- ✅ Sistema de agregar/eliminar productos
- ✅ Cálculo automático de totales y subtotales
- ✅ Preview de álbumes con reproductor
- ✅ Notificaciones toast para acciones del usuario

### 📱 Diseño Responsivo
- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Menú Hamburguesa**: Navegación móvil con animaciones
- **Grids Adaptables**: Layout que se ajusta de 1 a 4 columnas
- **Touch Friendly**: Botones y áreas clicables optimizadas

### 👤 Perfil de Usuario
- Avatar personalizado con indicador de estado
- Géneros musicales favoritos
- Historial de compras con fechas
- Opción de cerrar sesión

---

## 🚀 Inicio Rápido

### Prerrequisitos

```bash
Node.js >= 18.0.0
npm >= 9.0.0 o pnpm >= 8.0.0
```

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/electrosound.git
cd electrosound
```

2. **Instalar dependencias**
```bash
npm install
# o
pnpm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
# o
pnpm dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

### Build para Producción

```bash
npm run build
# o
pnpm build
```

El build optimizado estará disponible en la carpeta `/dist`.

---

## 📁 Estructura del Proyecto

```
electrosound/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes React
│   │   │   ├── AlbumCard.tsx    # Tarjeta de álbum con hover effects
│   │   │   ├── Cart.tsx         # Panel lateral del carrito
│   │   │   ├── Footer.tsx       # Footer con links y newsletter
│   │   │   ├── Header.tsx       # Navegación principal
│   │   │   ├── Hero.tsx         # Sección hero con animaciones
│   │   │   ├── MobileMenu.tsx   # Menú móvil desplegable
│   │   │   ├── UserProfile.tsx  # Modal de perfil de usuario
│   │   │   ├── figma/           # Componentes de Figma
│   │   │   └── ui/              # Componentes UI reutilizables
│   │   └── App.tsx              # Componente principal
│   ├── imports/                 # Assets importados de Figma
│   │   ├── Frame1.tsx           # Logo SVG
│   │   └── svg-*.ts             # SVGs vectoriales
│   └── styles/
│       ├── fonts.css            # Importaciones de fuentes
│       ├── index.css            # Estilos globales
│       ├── tailwind.css         # Configuración Tailwind
│       └── theme.css            # Variables CSS personalizadas
├── package.json                 # Dependencias del proyecto
├── vite.config.ts              # Configuración de Vite
├── postcss.config.mjs          # PostCSS config
└── README.md                    # Este archivo
```

### Componentes Principales

| Componente | Descripción | Props Clave |
|-----------|-------------|-------------|
| `Header` | Navegación con logo, menú, búsqueda, carrito y perfil | `onMenuClick`, `cartItemCount`, `onCartClick`, `onUserClick` |
| `Hero` | Sección hero con animaciones y estadísticas | - |
| `AlbumCard` | Tarjeta de producto con imagen, info y botones | `title`, `artist`, `price`, `image`, `onBuyClick` |
| `Cart` | Panel lateral del carrito con gestión de items | `isOpen`, `items`, `onUpdateQuantity`, `onCheckout` |
| `UserProfile` | Modal de perfil con avatar, géneros y compras | `isOpen`, `userName`, `favoriteGenres`, `purchasedAlbums` |
| `MobileMenu` | Menú de navegación móvil | `isOpen`, `onClose` |
| `Footer` | Footer con links, redes sociales y newsletter | - |

---

## 🎨 Sistema de Diseño

### Paleta de Colores

```css
/* Colores Principales */
--primary-purple: #9333ea     /* Purple-600 */
--primary-blue: #3b82f6       /* Blue-500 */
--accent-yellow: #eff6b2      /* Accent neon */
--bg-dark: #000000            /* Background principal */
--bg-gray: #1f2937            /* Gray-800 */
--text-light: #ffffff         /* Texto principal */
--text-muted: #9ca3af         /* Gray-400 */

/* Gradientes */
--gradient-primary: linear-gradient(to right, #9333ea, #7c3aed)
--gradient-bg: linear-gradient(to bottom right, #581c87, #000000, #1e3a8a)
```

### Tipografía

- **Font Family**: Sistema nativo (Apple System, Segoe UI, etc.)
- **Tamaños**:
  - Heading 1: 3rem (48px) - 4.5rem (72px) responsive
  - Heading 2: 2.25rem (36px) - 3rem (48px) responsive
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

### Espaciado

```
--spacing-xs: 0.25rem   (4px)
--spacing-sm: 0.5rem    (8px)
--spacing-md: 1rem      (16px)
--spacing-lg: 1.5rem    (24px)
--spacing-xl: 2rem      (32px)
--spacing-2xl: 3rem     (48px)
```

### Efectos Visuales

#### Glassmorphism
```css
background: rgba(31, 41, 55, 0.5);
backdrop-filter: blur(12px);
border: 1px solid rgba(139, 92, 246, 0.2);
```

#### Neon Glow
```css
box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
border: 1px solid rgba(147, 51, 234, 0.6);
```

#### Hover Effects
```css
transform: translateY(-8px);
transition: all 0.3s ease;
```

---

## 🛠 Stack Tecnológico

### Frontend Core

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **React** | 18.3.1 | Framework UI principal |
| **TypeScript** | 5.0+ | Tipado estático |
| **Vite** | 6.3.5 | Build tool y dev server |

### Estilos

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **Tailwind CSS** | 4.1.12 | Framework CSS utility-first |
| **PostCSS** | Latest | Procesamiento CSS |
| **@tailwindcss/vite** | 4.1.12 | Plugin de Vite para Tailwind |

### Animaciones

| Librería | Versión | Uso |
|---------|---------|-----|
| **Motion** | 12.23.24 | Animaciones y transiciones (ex Framer Motion) |

### UI Components

| Librería | Versión | Uso |
|---------|---------|-----|
| **Lucide React** | 0.487.0 | Iconos SVG modernos |
| **Sonner** | 2.0.3 | Notificaciones toast |
| **Radix UI** | Various | Componentes accesibles headless |

### Otras Librerías

| Librería | Versión | Uso |
|---------|---------|-----|
| **React Hook Form** | 7.55.0 | Gestión de formularios |
| **React DnD** | 16.0.1 | Drag and Drop |
| **Recharts** | 2.15.2 | Gráficos y visualizaciones |
| **React Slick** | 0.31.0 | Carruseles |

---

## 📑 Secciones

### 1️⃣ Header (Navegación)
<img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=200&fit=crop" alt="Header Section" />

- Logo Electrosound (importado desde Figma)
- Menú de navegación: Discos, Artistas, Géneros, Nosotros
- Buscador con autocomplete
- Iconos: Perfil de usuario y Carrito (con contador)
- Menú hamburguesa para móviles

### 2️⃣ Hero Section
<img src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=400&fit=crop" alt="Hero Section" />

- Título principal con gradiente animado
- Descripción de la plataforma
- CTAs: "Explorar Catálogo" y "Ver Artistas"
- Estadísticas: 500+ Álbumes, 100+ Artistas, 24/7 Disponible
- Efectos de background animados con Motion

### 3️⃣ Catálogo Premium
<img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=400&fit=crop" alt="Catalog Section" />

- Grid responsivo de álbumes (1-4 columnas)
- Tarjetas con:
  - Imagen del álbum
  - Título y artista
  - Descripción breve
  - Precio en USD
  - Botón de preview (play)
  - Botón de compra con efecto hover
- Animaciones de entrada staggered

### 4️⃣ Artistas Destacados
<img src="https://images.unsplash.com/photo-1571266028243-d220c6ba4a26?w=800&h=300&fit=crop" alt="Artists Section" />

- Grid 2x2 / 4x1 responsivo
- Tarjetas con:
  - Imagen del artista
  - Nombre
  - Géneros musicales
  - Overlay gradient on hover

### 5️⃣ Newsletter
<img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=300&fit=crop" alt="Newsletter Section" />

- Formulario de suscripción
- Input de email con validación
- Botón de envío
- Efectos decorativos de fondo

### 6️⃣ Footer
<img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=200&fit=crop" alt="Footer Section" />

- Logo y descripción
- Links rápidos
- Atención al cliente
- Newsletter secundario
- Redes sociales: Facebook, Instagram, Twitter, YouTube
- Copyright y términos legales

---

## 🔑 Funciones Clave

### 🛒 Gestión del Carrito

```typescript
// Agregar al carrito
const handleAddToCart = (album) => {
  const existingItem = cartItems.find(item => item.id === album.id);
  if (existingItem) {
    // Actualizar cantidad si ya existe
    updateQuantity(album.id, existingItem.quantity + 1);
  } else {
    // Agregar nuevo item
    setCartItems([...cartItems, { ...album, quantity: 1 }]);
  }
  toast.success('Álbum agregado al carrito');
};

// Actualizar cantidad
const handleUpdateQuantity = (id, quantity) => {
  if (quantity <= 0) {
    handleRemoveItem(id);
    return;
  }
  setCartItems(cartItems.map(item =>
    item.id === id ? { ...item, quantity } : item
  ));
};

// Eliminar item
const handleRemoveItem = (id) => {
  setCartItems(cartItems.filter(item => item.id !== id));
  toast.info('Álbum eliminado del carrito');
};
```

### 🎵 Preview de Álbumes

```typescript
const handlePlayPreview = (title) => {
  toast.info(`Reproduciendo preview de "${title}"`);
  // Aquí se implementaría la lógica de reproducción de audio
};
```

### 👤 Gestión de Perfil

```typescript
const userData = {
  name: 'DJ CyberNova',
  avatar: 'https://...',
  favoriteGenres: ['EBM', 'Industrial', 'Techno', 'Synthwave'],
  purchasedAlbums: [
    { id: '1', title: 'Rebel Empire', artist: 'Movimiento Máquina', ... },
    // ... más álbumes
  ],
};

const handleLogout = () => {
  setUserProfileOpen(false);
  toast.success('Sesión cerrada correctamente');
  // Implementar lógica de logout
};
```

### 📱 Navegación Responsiva

```typescript
// Menú móvil
const [menuOpen, setMenuOpen] = useState(false);

// Scroll suave a secciones
<a href="#catalogo-premium">Discos</a>
<a href="#artists">Artistas</a>
```

### 🔔 Sistema de Notificaciones

```typescript
import { toast, Toaster } from 'sonner';

// Configuración global
<Toaster 
  theme="dark" 
  position="bottom-right"
  toastOptions={{
    style: {
      background: '#1f2937',
      border: '1px solid rgba(139, 92, 246, 0.3)',
    },
  }}
/>

// Uso
toast.success('¡Operación exitosa!');
toast.error('Error al procesar');
toast.info('Información importante');
```

---

## 💻 Desarrollo

### Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=https://api.electrosound.com
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_ANALYTICS_ID=G-...
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Build optimizado
npm run preview      # Preview del build

# Linting & Testing (si se configuran)
npm run lint         # ESLint
npm run test         # Jest/Vitest
npm run format       # Prettier
```

### Agregar Nuevos Álbumes

1. Importar imagen desde Figma:
```typescript
import imgNuevoAlbum from "figma:asset/[HASH].png";
```

2. Agregar al array de álbumes:
```typescript
const albums = [
  {
    id: '9',
    title: 'Nuevo Álbum',
    artist: 'Artista',
    description: 'Descripción del álbum',
    price: 20,
    image: imgNuevoAlbum,
  },
  // ... más álbumes
];
```

### Personalizar Colores

Editar `/src/styles/theme.css`:

```css
:root {
  --color-primary: #tu-color;
  --color-accent: #tu-acento;
}
```

O usar Tailwind directamente:

```jsx
<div className="bg-purple-600 hover:bg-purple-500">
  {/* Tu contenido */}
</div>
```

### Crear Nuevos Componentes

```typescript
// /src/app/components/MiComponente.tsx
import { motion } from 'motion/react';

interface MiComponenteProps {
  titulo: string;
  // ... más props
}

export function MiComponente({ titulo }: MiComponenteProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="..."
    >
      <h2>{titulo}</h2>
    </motion.div>
  );
}
```

Importar en App.tsx:

```typescript
import { MiComponente } from './components/MiComponente';
```

---

## 📚 Documentación

### Recursos Útiles

- **React**: [https://react.dev](https://react.dev)
- **TypeScript**: [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Motion**: [https://motion.dev](https://motion.dev)
- **Vite**: [https://vite.dev](https://vite.dev)
- **Radix UI**: [https://www.radix-ui.com](https://www.radix-ui.com)
- **Lucide Icons**: [https://lucide.dev](https://lucide.dev)

### Guías de Estilo

1. **Componentes**: Usar PascalCase (`AlbumCard.tsx`)
2. **Funciones**: Usar camelCase (`handleAddToCart`)
3. **Constantes**: Usar UPPER_SNAKE_CASE (`MAX_ITEMS`)
4. **CSS Classes**: Usar kebab-case o Tailwind utilities
5. **Props**: Definir interfaces TypeScript para todas las props

### Testing (Próximamente)

```bash
# Unit Tests con Vitest
npm run test

# E2E Tests con Playwright
npm run test:e2e

# Coverage
npm run test:coverage
```

---

## 🚀 Mejoras Futuras

### Funcionalidades Pendientes

- [ ] **Autenticación de Usuarios**
  - Login/Register con email y contraseña
  - OAuth con Google, Facebook, Spotify
  - Recuperación de contraseña
  - Verificación de email

- [ ] **Integración de Pagos**
  - Stripe para procesamiento de pagos
  - PayPal como alternativa
  - Criptomonedas (Bitcoin, Ethereum)
  - Cartera digital interna

- [ ] **Reproductor de Música**
  - Player HTML5 con controles personalizados
  - Cola de reproducción
  - Ecualizador visual
  - Modo mini-player flotante
  - Integración con Spotify API

- [ ] **Sistema de Búsqueda Avanzada**
  - Búsqueda por texto completo
  - Filtros por género, artista, precio
  - Ordenar por: popularidad, precio, fecha
  - Búsqueda por voz

- [ ] **Wishlist / Favoritos**
  - Guardar álbumes favoritos
  - Compartir wishlists
  - Notificaciones de descuentos
  - Recomendaciones personalizadas

- [ ] **Sistema de Reseñas**
  - Calificación con estrellas
  - Comentarios de usuarios
  - Moderación de contenido
  - Reseñas verificadas de compradores

- [ ] **Panel de Administración**
  - CRUD de productos
  - Gestión de usuarios
  - Analytics y estadísticas
  - Gestión de pedidos
  - Sistema de cupones/descuentos

- [ ] **Optimizaciones**
  - PWA (Progressive Web App)
  - Lazy loading de imágenes
  - Code splitting avanzado
  - Server-Side Rendering (SSR) con Next.js
  - Caché de datos con React Query

- [ ] **Características Sociales**
  - Perfiles públicos de usuarios
  - Seguir artistas
  - Compartir en redes sociales
  - Playlists colaborativas
  - Chat en vivo con soporte

- [ ] **Multi-idioma**
  - i18n con react-intl
  - Español, Inglés, Alemán, Francés
  - Detección automática de idioma
  - Selector de idioma en header

- [ ] **Accesibilidad**
  - Navegación por teclado completa
  - Screen reader compatible
  - Contraste mejorado
  - ARIA labels comprehensivos
  - Skip links

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar Electrosound:

### Cómo Contribuir

1. **Fork el proyecto**
```bash
git fork https://github.com/tu-usuario/electrosound.git
```

2. **Crear una rama para tu feature**
```bash
git checkout -b feature/AmazingFeature
```

3. **Hacer commit de tus cambios**
```bash
git commit -m 'Add: Nueva característica increíble'
```

4. **Push a la rama**
```bash
git push origin feature/AmazingFeature
```

5. **Abrir un Pull Request**

### Guías de Contribución

- Seguir el estilo de código existente
- Escribir mensajes de commit descriptivos
- Actualizar la documentación si es necesario
- Agregar tests para nuevas funcionalidades
- Verificar que el código pase el linter

### Tipos de Commit

```
feat: Nueva funcionalidad
fix: Corrección de bug
docs: Cambios en documentación
style: Cambios de formato (no afectan código)
refactor: Refactorización de código
test: Agregar o modificar tests
chore: Tareas de mantenimiento
```

### Reportar Bugs

Usa el sistema de Issues de GitHub e incluye:
- Descripción del bug
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots si aplica
- Información del entorno (OS, navegador, versión)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2026 Ernesto Lázaro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Autor

<div align="center">
  <img src="https://www.ernestolazaro.com.mx/_assets/v11/cdbf46178ea2d5345171aef0fd65f04e5e481247.png" alt="Ernesto Lázaro" style="border-radius: 50%;" width="500" height="300" />
  
  ### **Ernesto Lázaro** 🦇
  
  *Full Stack Developer | UI/UX Designer | Music Enthusiast*
  
  [![Website](https://img.shields.io/badge/Website-ernestolazaro.com.mx-purple?style=for-the-badge)](https://www.ernestolazaro.com.mx/)
  [![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/ernestolazaro)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/ernestolazaro)
  [![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:contact@ernestolazaro.com.mx)
</div>

### 💼 Experiencia

- **Especialización**: React, TypeScript, Node.js, UI/UX Design
- **Industrias**: E-commerce, Fintech, Entertainment
- **Herramientas**: Figma, Adobe Creative Suite, Git, Docker

### 🎵 Sobre el Proyecto

Electrosound nace de la pasión por la música electrónica alternativa y el desarrollo web moderno. 
El objetivo es crear una plataforma que no solo venda música, sino que ofrezca una experiencia 
visual y sonora inmersiva que refleje la energía del género.

> "La música electrónica es el soundtrack del futuro, y Electrosound es la plataforma que lo hace realidad."
> 
> — Ernesto Lázaro

---

## 🙏 Agradecimientos

- **Figma Community** - Por los recursos de diseño
- **Unsplash** - Por las imágenes de alta calidad
- **Radix UI Team** - Por los componentes accesibles
- **Tailwind Labs** - Por el increíble framework CSS
- **Vercel** - Por Motion (ex Framer Motion)
- **La comunidad Open Source** - Por las herramientas que hacen esto posible

---

## 📞 Soporte

¿Necesitas ayuda? Aquí hay algunas opciones:

- 📧 **Email**: support@electrosound.com
- 💬 **Discord**: [Únete a nuestra comunidad](https://discord.gg/electrosound)
- 🐛 **Issues**: [GitHub Issues](https://github.com/tu-usuario/electrosound/issues)
- 📖 **Docs**: [Documentación completa](https://docs.electrosound.com)

---

<div align="center">
  
  ### ⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐
  
  ![Visitors](https://visitor-badge.laobi.icu/badge?page_id=electrosound.readme)
  
  **Hecho con ❤️ y mucha música 🎵 por [Ernesto Lázaro](https://www.ernestolazaro.com.mx/)**
  
  ---
  
  © 2026 Electrosound. Todos los derechos reservados.
  
</div>
