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
- [🧱 Capítulo 2 - Crear el proyecto con Vite + TypeScript]
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

Una vez hayamos desplegado el proyecto, lo primero en lo que podemos fijarnos, es que dentro de la carpeta assets, nos encontramos con unos ficheros "raros" con un nombre largo. Estos ficheros son los "bundle", que son el resultado de lo que hace un bundler, con 3 procesos principales:

1- Hacerlo más pequeño.
2- Uglifiying o hacerlo más feo, resultado de transpilar el código, para que cualquier persona que quiera ver qué hace el código, no pueda verlo.
3- Tree shaking. Podemos entenderlo como una analogía de sacudir el arbol, es decir, va a quitar todas las partes del código que no se usan.

Una vez vistos estos conceptos iniciales, tenemos que hablar de la parte pública y la parte privada. La parte pública del proyecto es aquella en la que cualquier persona puede acceder, es decir, es la parte del cliente que es rendereizada desde el navegador web. Por otra parte, tenemos la parte privada, en la que solo pueden acceder las personas con roles (logueadas). NUestro browser solo va a cargar la parte pública, lo que nos va a facilitar a nuestro navegador de que solo tenga que renderizar una parte del código. Esta separación tambien nos brinda seguridad, puesto que el navegador no va a renderizar la parte privada, por lo que nadie podrá ver el código de este, puesto que no se renderiza.

IMPORTACIÓN DE MÓDULOS

Lo primero en lo que podemos fijarnos es en la manera en la que se importan los módulos. El uso de vite nos permite utiliar los plugins, para pòder utilizar distintas zonas de React, por ejemplo, si quisieramos hacer testing, solo tendriamos que utilizar el plugin de testing. (ejemplo código)

import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import './Button.css'

Si nos fijamos ahor adentro de nuestro fichero main.tsx, podemos encontrar la declaración StrictMode. ¿Qué hace esta declaración? Se encarga de la doble renderización de los componentes. Lo hace creando un componente por primera vez, luego lo destruirá, y luego se creará otra vez, para posteriormente comporbar que funciona de la misma manera antes y después de haber sido destruido.

<StrictMode>  
    <App />
  </StrictMode>,


