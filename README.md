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

En react necesitamos un método para detectar cada vez que se produce un cambio, para tener que renderizar de nuevo la información. ¿Cómo se hace esto? Mediante los triggers. Cómo se despierta un trigger? Mediante un botón por ejemplo. Una llamada a una API, haciendo un get a un endpoint... Vamos a identificar dos tipos de trigger. Los trigger iniciales, que se encargan de montar el componente en primer lugar. Luego tendremos un segundo trigger, que se encarga del re-renderizado. Se encarga de renderizar una vez, y si realizamos un cambio, se vuelve a producir la renderización.

Tenemos que tener claro que React trabaja con un DOM para la renderización del cliente, un DOM inicial, y un DOM virtual. El trigger de re-renderizado, lo que hace es comprobar el contenido del DOM, con el contenido del DOM virtual que contiene los cambios que se han realizado que no están incluidos en el primer render.

Tenemos que tener claro también cual es el concepto de un commit, que no es más que la aplicación de un cambio, que viene dado por la diferencia entre el DOM y el DOM virtual, es decir, cuando se produce la aplicación del cambio entre ambos DOM, y proceder a su renderizado.

## 📦 Capítulo 3 - Componentes

Nada más arrancar la aplicación, podemos ver que tenemos el componente root. Este componente es el único creado inicialmente, y desde nuestro `main.tsx` se le llama indicando su id desde la función:

```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

```
Dentro de esta función, si la seleccionamos, podemos ver que el formato está en .jsx. ¿Qué significa esto? Que esta función retorna HTML con lógica. ¿Podemos usar cualquier fichero con JavaScript sin poner la extensión .jsx? Sí, por supuesto, siempre que no tenga HTML con lógica dentro. Si no hay necesidad, no hace falta usar .jsx.


### 🧩 Estructura y buenas prácticas de los componentes

Debemos tener muy claro que un componente siempre debe tener la mínima unidad de lógica posible. No es recomendable implementar demasiada lógica en un solo componente. Veamos un ejemplo:


```tsx
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        className="boton-personalizado"
        /* style={{ color: "blue", backgroundColor: "green" }} */
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
      <p>
        Edita <code>src/App.tsx</code> y guarda para probar HMR
      </p>
    </>
  )
}

```

Es importante ver que dentro de esta función tenemos propiedades en React que son distintas a HTML. Por ejemplo, backgroundColor se escribe diferente en React que en HTML, y no es lo mismo class='name' (HTML) que className='' (React). Podemos identificar rápidamente si hay lógica viendo si dentro de la clase hay {}.

Todas las propiedades del componente están dentro, pero una forma más correcta es definir el estilo fuera del componente:

```tsx
const style = {
  button: {
    color: "blue",
    backgroundColor: "grey",
  }
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        className="boton-personalizado"
        style={style.button}
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
      <p>
        Edita <code>src/App.tsx</code> y guarda para probar HMR
      </p>
    </>
  )
}
```

Así tenemos propiedades en un objeto que pueden ser más reutilizables. Sin embargo, lo más recomendable es usar un archivo CSS para los estilos e importarlo en el componente:

```tsx
/* Button.css */
.boton-personalizado {
  color: blue;
  background-color: grey;
}
```

Luego, creamos el componente botón:
```tsx
import "./Button.css"

/*
Este componente se considera un componente TONTO, ya que solo delega y no tiene lógica propia.
*/

export const Button = ({ label, onClick }) => {
  return (
    <button className="boton-personalizado" onClick={onClick}>
      {label}
    </button>
  )
}

```

Si metemos la lógica del contador dentro del botón, no estamos atomizando el componente correctamente, ya que la lógica del conteo no pertenece al botón en sí. No todos los botones tendrán la misma lógica. Para separar responsabilidades, podemos pasar la lógica como prop:

```tsx
interface ButtonProps {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className="boton-personalizado" onClick={onClick}>
      {label}
    </button>
  )
}
```
Ahora la lógica del contador está fuera del botón y el CSS está separado. Solo tenemos que pasar la función como parámetro.

###📦 Barriles (Barrels)
Para no estar exportando constantemente todos los módulos, podemos usar barriles. Creamos un archivo índice:


```tsx
// components/index.ts
export * from "./Button/Button"
export * from "./Button2/Button2"
```
Y luego en App.tsx importamos así:

```tsx
import { Button, Button2 } from "./components"
```
Esto es mucho más limpio que importar cada componente o CSS por separado.

### 🧠 Componentes inteligentes y tontos
Componentes tontos (como Button.tsx): No declaran estado, solo renderizan UI y delegan la lógica.
Componentes inteligentes (como App.tsx): Gestionan el estado y la lógica, y pasan props a los componentes tontos.
Siempre que necesites que algo sobreviva a los renders y mantenga su estado, debe estar en un componente inteligente. Por ejemplo, un contador que necesita re-renderizar la página cada vez que se pulsa el botón.

Recuerda:
LOS COMPONENTES DEBEN SER LA UNIDAD MÍNIMA DE LÓGICA.
Esto aplica tanto para React como para Angular. El paso de parámetros también se hace por referencia, igual que en Java.

