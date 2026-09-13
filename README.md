# Juan David Fierro Calderón — Hoja de Vida Web

Sitio web personal de hoja de vida desarrollado con **Java 21 / Spring Boot** y **Thymeleaf**. Aplicación de una sola página con diseño profesional, animaciones de scroll, efecto Aurora en el hero y navegación fija con glassmorphism.

---

## Vista previa

> Ejecuta el proyecto localmente y abre `http://localhost:8080`

<!--
Recomendación: agrega aquí 1-2 capturas (por ejemplo del hero con el efecto Aurora
y de la sección de habilidades o proyecto destacado), así:

![Hero](docs/screenshots/hero.png)
![Sección de habilidades](docs/screenshots/habilidades.png)

Guarda las imágenes en una carpeta docs/screenshots/ en la raíz del repo.
-->

---

## Tecnologías

| Capa | Tecnología |
|---|---|
| Backend | Java 25, Spring Boot 4, Spring MVC |
| Template | Thymeleaf |
| Estilos | CSS3 (custom, sin frameworks) |
| Interactividad | JavaScript (Vanilla) — IntersectionObserver, scroll events |
| Fuentes | Google Fonts — Space Grotesk + DM Sans |
| Build | Maven (Maven Wrapper incluido) |
| Servidor | Spring Boot Embedded Tomcat |

---

## Estructura del proyecto

```
cv_fierroCalderon/
├── src/
│   ├── main/
│   │   ├── java/co/com/fierroCalderoncv/
│   │   │   ├── CvFierroCalderonApplication.java   # Clase principal Spring Boot
│   │   │   └── HomeController.java                # Controlador MVC — sirve "/"
│   │   └── resources/
│   │       ├── templates/
│   │       │   └── index.html                     # Template Thymeleaf (página única)
│   │       ├── static/
│   │       │   ├── css/style.css                  # Sistema de diseño completo
│   │       │   ├── js/main.js                     # Animaciones y navegación
│   │       │   └── cv-juan-fierro.pdf              # PDF descargable de la hoja de vida
│   │       └── application.properties
│   └── test/
│       └── java/co/com/fierroCalderoncv/
│           └── CvFierroCalderonApplicationTests.java
├── pom.xml
└── mvnw / mvnw.cmd
```

---

## Cómo ejecutar localmente

### Requisitos

- Java 25 o superior (versión configurada en `pom.xml`)
- Maven (o usar el wrapper incluido `mvnw`)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/JuanFierro15/cv_FierroCalderon.git
cd cv_FierroCalderon

# 2. Ejecutar con Maven Wrapper (no requiere Maven instalado)
./mvnw spring-boot:run          # Linux / macOS
.\mvnw.cmd spring-boot:run      # Windows

# 3. Abrir en el navegador
http://localhost:8080
```

---

## Secciones del CV

| # | Sección | Descripción |
|---|---|---|
| 01 | **Sobre mí** | Presentación personal y estadísticas clave |
| 02 | **Habilidades** | Stack tecnológico agrupado por categoría |
| 03 | **Proyecto** | Sistema de Gestión ICFES — proyecto destacado |
| 04 | **Educación** | Formación académica — Universidad Surcolombiana |
| 05 | **Contacto** | Email y GitHub |
| 06 | **Descarga CV** | Botón para descargar la hoja de vida en PDF |

---

## Proyecto destacado — Sistema de Gestión ICFES

Aplicación web MVC para la administración de instituciones preparatorias para el examen ICFES.

**Funcionalidades principales:**
- Control de acceso basado en roles (admin, docente, estudiante) con Spring Security 6
- Gestión de asistencias, simulacros en PDF y materiales de estudio
- Logs de auditoría y cierre automático de instituciones con tareas programadas
- Internacionalización en 4 idiomas: español, inglés, francés e italiano
- Base de datos PostgreSQL gestionada con Hibernate / Spring Data JPA

---

## Contacto

- **Email:** juandafica19@gmail.com
- **GitHub:** [github.com/JuanFierro15](https://github.com/JuanFierro15)
- **Ciudad:** Neiva, Huila, Colombia

---

## Licencia

Este proyecto está bajo la licencia MIT — ver el archivo [LICENSE](LICENSE) para más detalles.
