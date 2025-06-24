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

- [📘 Capítulo 1 - Creación y despliegue del proyecto]
- [🧱 Capítulo 2 - Detección de cambios]
- [⚛️ Capítulo 3 - JSX y Componentes]
- [📦 Capítulo 4 - Props y Estado]
- [🔄 Capítulo 5 - Ciclo de vida y useEffect]
- [📨 Capítulo 6 - Eventos y manejo de formularios]
- [🧠 Capítulo 7 - Hooks personalizados]
- [🌐 Capítulo 8 - Consumo de APIs]
- [🧭 Capítulo 9 - React Router]
- [🧼 Capítulo 10 - Buenas prácticas]
- [🚀 Capítulo 11 - Despliegue en producción]

---

## 📘 Capítulo 1 - Creación y despliegue del proyecto

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

Para el despliegue de nuestra aplicación, vamos a utilizar **WSL**. Es decir, vamos a desplegar los ficheros dentro de una terminal Linux en Windows, mientras que la edición de código la haremos en VS Code de manera remota desde Windows.

Como herramienta de desarrollo, vamos a utilizar **Vite**, que nos permite arrancar el servidor de desarrollo y compilar/transpilar nuestro código de forma rápida. Vite sustituye a herramientas anteriores como *create-react-app* o *Webpack*.

### 🚀 Pasos para crear y arrancar el proyecto

1. **Crear el proyecto con Vite:**
    ```bash
    npm create vite@latest
    ```

2. **Instalar dependencias:**
    ```bash
    npm install
    ```

3. **Arrancar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El segundo comando nos permitirá ver el proyecto en local y recargar los cambios automáticamente.

### 🏗️ Generar el build para producción

Si queremos realizar el despliegue de nuestro código y generar la carpeta `dist` con los archivos optimizados y listos para producción, ejecutamos:

```bash
npm run build
```

### 📦 ¿Qué ocurre tras el build?

Dentro de la carpeta `assets` aparecerán ficheros con nombres largos y "raros". Estos son los *bundles*, resultado del proceso de empaquetado (*bundling*), que incluye:

1. **Minificación:** Hacer los archivos más pequeños.
2. **Uglifying:** Hacer el código menos legible (transpilado), dificultando su lectura para terceros.
3. **Tree shaking:** Eliminar el código que no se utiliza.

### 🔒 Parte pública y privada

- **Parte pública:** Es la parte del proyecto accesible para cualquier usuario, es decir, el cliente que se renderiza en el navegador web.
- **Parte privada:** Solo accesible para usuarios autenticados (con roles). El navegador solo carga la parte pública, lo que mejora la seguridad y el rendimiento.

### 📥 Importación de módulos

Vite permite utilizar plugins para ampliar funcionalidades, como testing, añadiendo solo el plugin necesario.

**Ejemplo de importaciones en React:**
```tsx
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './Button.css'
```

En el archivo `main.tsx` encontramos la declaración de `StrictMode`:

```tsx
<StrictMode>
  <App />
</StrictMode>
```
`StrictMode` se encarga de la doble renderización de los componentes para comprobar que funcionan igual antes y después de ser destruidos y creados de nuevo.

También importamos desde `react-dom/client` para renderizar el elemento raíz:

```tsx
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```
El símbolo `!` en `getElementById('root')!` es para indicar a TypeScript que ese elemento existe (non-null assertion).

### 🧩 Componentes e importaciones

Los componentes en React son funciones que se pueden exportar e importar en otros archivos según se necesiten.  
Las importaciones pueden hacerse de dos formas:
- Importando todo el módulo.
- Importando solo los elementos concretos que se necesitan, usando llaves.

```tsx
import { createRoot } from 'react-dom/client'
import './index.css'
```

Tenemos que tener en cuenta que las importaciones por defecto deben usarse solo en casos muy específicos, ya que estaríamos importando absolutamente todo el módulo, incluyendo partes que quizás no necesitamos. Esto puede afectar al rendimiento y aumentar el tamaño final del bundle.

Por eso, es recomendable importar únicamente los elementos concretos que vamos a utilizar, usando llaves ({}), para mantener el código más limpio y eficiente.

Este tipo de arquitectura se conoce como SPA (Single Page Application), es decir, una aplicación de página única. Todo se renderiza sobre una única página (el mismo index.html), pero solo se actualizan las partes necesarias de la interfaz, sin recargar toda la página. Esto mejora la experiencia de usuario y el rendimiento de la aplicación.

---

## 📘 Capítulo 2 - Detección de cambios
