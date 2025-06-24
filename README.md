# 📘 Curso de React - Apuntes

Este repositorio está hecho exclusivamente para tomar apuntes e ir aprendiendo sobre **React**, desde los conceptos más básicos hasta los más avanzados. Puedes encontrar que todo esta ordenado en capitulos, así como he añadido múltiples capítulos en los que voy a ir
explicando qué se va a ir haciendo en cada apartado. 

---

## 🛠️ Tecnologías utilizadas

- ⚛️ **React** — Librería de JavaScript para construir interfaces de usuario.
- 💙 **TypeScript** — Tipado estático para JavaScript.
- ⚡ **Vite** — Empaquetador para el proyecto con soporte moderno.
- 📏 **ESLint** — Linter para mantener el código limpio y consistente.
- 🎨 **Prettier** — Formateador de código.
- 🎨 **CSS** — Para definir y aplicar estilos visuales a los componentes.

---

## 📚 Índice de capítulos

- [📘 Capítulo 1 - Creación y despliegue del proyecto](#capítulo-1---creación-y-despliegue-del-proyecto)
- [🧱 Capítulo 2 - Crear el proyecto con Vite + TypeScript](#capítulo-2---crear-el-proyecto-con-vite--typescript)
- [⚛️ Capítulo 3 - JSX y Componentes](#capítulo-3---jsx-y-componentes)
- [📦 Capítulo 4 - Props y Estado](#capítulo-4---props-y-estado)
- [🔄 Capítulo 5 - Ciclo de vida y useEffect](#capítulo-5---ciclo-de-vida-y-useeffect)
- [📨 Capítulo 6 - Eventos y manejo de formularios](#capítulo-6---eventos-y-manejo-de-formularios)
- [🧠 Capítulo 7 - Hooks personalizados](#capítulo-7---hooks-personalizados)
- [🌐 Capítulo 8 - Consumo de APIs](#capítulo-8---consumo-de-apis)
- [🧭 Capítulo 9 - React Router](#capítulo-9---react-router)
- [🧼 Capítulo 10 - Buenas prácticas](#capítulo-10---buenas-prácticas)
- [🚀 Capítulo 11 - Despliegue en producción](#capítulo-11---despliegue-en-producción)

---

## 📘 Capítulo 1 - Creación y despliegue del proyecto

📘 Capítulo 1 - Creación y despliegue del proyecto.

Para el despliegue de nuestra aplicación, vamos a utilizar WSL, es decir, vamos a desplegar los ficheros dentro de una terminal Linux dentro de Windows, a la vez que la edición de código la haremos en VScode de manera remota desde Windows.

Como herramienta de desarrollo, vamos a utilizar Vite, que nos va a permitir arrancar el servidor de desarrollo, y compilar/transpilar nuestro código de forma rápida. Sustituye al anterior create-react-app o Webpack.

Para desplegar el proyecto, simplement usaremos el comando:

``` bash
npm create vite@latest
```

Una vez  hecho todo esto, veremos que se ha creado en una carpeta con el nombre que hayamos elegido. Dentro de esta carpeta, tendremos que utilizar los comandos:

``` bash
npm install
npm run dev
```

El segundo comando nos permitirá ver el proyecto en local y recargar los cambios automáticamente.

Por otra parte, si queremos realizar el despliegue de nuestro código y generar carpeta dist con los archivos optimizados y listos para producción, tendremos que ejecutar:

```bash
npm run build
```

