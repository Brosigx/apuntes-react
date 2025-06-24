
/*
Aqui si te fijas, solo estamos importando el strictMode, no nos interesa importar todo react, porque se estarian importando
muchas cosas. por ejemplo, podriamos estar haciendo 

Hacer esto es una guarreria de manual, es mucho mejor hacerlo con llaves.
---> <React.StrictMode>
  </>
  */
import { StrictMode } from 'react'

//Dom, si te acuerdas de Humberto, se encarga de la parte de la renderizacion del navegador
import { createRoot } from 'react-dom/client'
import './index.css'

//Aqui estamos importando todo el contenido de app.tsx, porque no lo estamos poniendo entre llaves.
import App from './App.tsx'

//El createRoot tiene una exclamacion porque puede ser que el ID no exista
createRoot(document.getElementById('root')!).render(

  /*
  El strcit mode se encarga de controlar la creacion de componentes, rompiendolo y creandolo de nuevo
  de esta forma se ve si mantiene el mismo estado que antes de crearlo, para controlar el correcto funcionamiento. En
  produccion se quita.
  */
  
  /*
  Si te fijas, estamos importando la funcion App, declarada en el fichero App.tsx. JSX es la capacidad de tener HTML sumado a que
  tiene capacdiad de logica dentro del HTML. Es tan facil como fijarte en la extension de los ficheros. Ahora mismo podemos ver que
  tenemos tsx. Si quitasemos la x, simplemente seria HTML sin logica ninguna.

  DUDA: Siempre tenemos que poner extension jsx o tsx cuando creamos un fichero que va a contener JavaScript? NO!!!!
  
  */
  <StrictMode>  
    <App />
  </StrictMode>,

  /*
  1- Esto es una SPA, SINGLE PAGE APPLICATION, es decir, se renderiza todo lo que hay ahi dentro en una sola pagina.
  La magia de esto es que haya deteccion de cambios para poder ver los cambios conforme los vamos creando.
  La deteccion de cambios se hace mediante los triggers, es decir, eventos que despierten un proceso de render, por ejemplo,
  el acceder a un endpoint, una llamada a una api, pulsar un boton... muchas cosas.

  2 - Tenemos un trigger inicial, que se encarga de montar todo el componente. Y luego tendremos un segundo trigger, que se
  encarga del re-render. ¿Que puede hacer que algo se re-renderice? Un botón... muchas cosas.

  3 - Tenemos dos tipos de DOM, un DOM normal, y un DOM virtual, el DOM normal contiene lo que ya esta montado, mientras que el 
  DOM virtual contiene una copia del DOM original pero con todos los cambios creados hasta el momento. El render lo que hace comparar
  ambos DOM.

  4 - ¿Qué es un commit en REACT? Es el proceso de comparar ambos DOM, como se ha explicado antes.

  EJEMPLO: En el contexto de un restaurante, tenemos un trigger que seria cuando un cliente hace un pedido, el proceso
  de renderizado seria CREAR el componente, en este caso, crear el plato. Luego tendriamos que entregar el plato que se
  ha pedido, sería el proceso del commit.
  */

   
)

/*
Meta no quiere que uses create-react-app porque ahora puedes usar Vite y Next.js que ofrece mucho
mejor rendimiento.
*/