# Callejeros con Futuro

Sitio web estático y responsivo para **Callejeros con Futuro**, enfocado en apadrinar atención médica veterinaria para animales rescatados en Honduras. Incluye páginas de presentación, programas, voluntariado, galería, donaciones, blog, eventos, FAQ y contacto.

## Características principales
- Navegación fija con menú hamburguesa accesible, estado `aria-expanded` y enlaces a todas las secciones.
- Loader inicial animado que se oculta tras la carga para mejorar la percepción de rendimiento.
- Componentes interactivos: carrusel automático con controles en `galeria.html`, acordeón de preguntas frecuentes en `faq.html`, modal de imágenes en `donaciones.html` y formularios de contacto/donación.
- Diseño responsivo con paleta púrpura/naranja, textura de fondo y tipografía sans serif; íconos vía CDN de Font Awesome 6.5 (y Boxicons en galería).
- Secciones de impacto: métricas destacadas, CTA de donación, testimonios/eventos y llamados a voluntariado.

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
   └─ img/
```

## Tecnologías y dependencias
- HTML5 + CSS3 + JavaScript vanilla.
- Font Awesome 6.5 (CDN) y Boxicons 2.1.4 (galería).
- No requiere Node, npm ni bundler; basta un servidor estático o abrir el `index.html` en el navegador.
