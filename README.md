# 🐱 Curso Git y GitHub - CodeCats

Proyecto base utilizado para enseñar el uso de Git y GitHub mediante un flujo de trabajo colaborativo con ramas, commits y pull requests.

---

## 📌 Sobre el proyecto

Este proyecto fue creado por el grupo  **CodeCats 🐱** y el grupo **Linux 🐧**, con el objetivo de simular un entorno real de trabajo en equipo usando GitHub.

Se utiliza como base para demostrar:

* Uso de ramas (`feature`, `fix`)
* Commits semánticos
* Pull Requests
* Resolución de conflictos
* Trabajo colaborativo

---

## 🎨 Identidad visual

Colores oficiales del proyecto:

```css
:root {
  --verde-limon: #C3FB34;
  --azul-gatuno: #4142F5;
}
```

---

## 🚀 Funcionalidades

* ✅ Interfaz básica con HTML, CSS y JavaScript
* 🌗 Modo oscuro (dark mode)
* 👋 Interacción con usuario (botón de saludo)
* 🎨 Estilos personalizados con variables CSS

---

## 🌿 Flujo de trabajo (Git)

Este proyecto sigue una estructura de ramas:

* `main` → versión estable
* `feature/*` → nuevas funcionalidades
* `fix/*` → corrección de errores

Ejemplos:

* `feature/dark-mode`
* `fix/css-path`

---

## 🔧 Cómo usar el proyecto

### 1. Clonar repositorio

```bash
git clone <URL_DEL_REPO>
cd cursoSGit
```

---

### 2. Abrir el proyecto

Solo abre el archivo:

```bash
index.html
```

---

### 3. Crear una nueva rama

```bash
git checkout -b feature/nueva-funcionalidad
```

---

### 4. Subir cambios

```bash
git pull origin develop
git add --patch
git commit -m "feat: agregar nueva funcionalidad"
git push origin feature/nueva-funcionalidad
```

---

## 💥 Resolución de conflictos

Durante el curso se simulan conflictos reales para aprender a resolverlos manualmente.

Ejemplo de conflicto:

```text
<<<<<<< HEAD
cambio local
=======
cambio remoto
>>>>>>> origin/main
```

---

## 🧠 Objetivo educativo

Este proyecto busca enseñar que:

> Git no solo guarda cambios, sino que permite trabajar en equipo de forma organizada.

---

## 👩‍💻 Autora

**Carla Patricia Chuquimia Mamani**
Ingeniería en Sistemas