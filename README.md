# Callejeros con Futuro HN

Sitio web estático para la organización sin fines de lucro **Callejeros con Futuro HN**. Incluye páginas de presentación, programas, cómo ayudar, contacto y blog, con navegación responsiva, animación de carga y formulario de contacto.

## Características
- Navegación fija con menú hamburguesa y animación de despliegue vertical en móvil.
- Loader inicial con animación de huellas.
- Páginas clave: Inicio, Nosotros, Programas, Cómo ayudar, Galería, Blog, Eventos, Contacto, FAQ y Donaciones.
- Página "Cómo ayudar" con hero informativo, tarjetas de formas de apoyo, programas y formulario de voluntariado.
- Página de contacto con banner, formulario y datos de contacto.
- Diseño responsivo y tipografía sans serif; íconos con Font Awesome 6.5.
- Paleta de color: púrpura (`#6d28d9`, `#4c1d95`), naranja (`#fb923c`, `#f97316`), fondo claro (`#f0f0ea`).

## Estructura del proyecto
```
.
├─ index.html
├─ nosotros.html
├─ programas.html
├─ ayudar.html
├─ galeria.html
├─ blog.html
├─ eventos.html
├─ contacto.html
├─ faq.html
├─ donaciones.html
├─ styles/
│  └─ style.css
├─ js/
│  └─ script.js
└─ assets/
   └─ img/   (logotipos e imágenes varias)
```

## Desarrollo
- Estilos globales en `styles/style.css`.
- Interacciones (loader y menú móvil) en `js/script.js`.
- Ajustes responsivos bajo los media queries (768px y 900px).
- Íconos: CDN de Font Awesome 6.5.0.