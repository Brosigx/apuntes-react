import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import './Button.css'


/*
RENDER: ¿Qué es el render? Básicamente es ejecutar una función. Cada vez que ejecutamos algo, por ejemplo, la function App(),
estariamos haciendo un render. Si en nuestra aplicación tenemos un HTML, y este tiene dentro un dashboard, el dashboard esta
ejecutando una función, y el resultado de ejecutar esa función, se vuelve a meter donde estará el dashboard, creando un renderizado.
IMPORTANTE: Nuestra función como programadores es que haya la mínima cantidad de renders, porque esto consume recursos.
*/

/*
COMPONENTE: Es muy importante que siempre que hagamos un componente, sea la minima unidad logica posible.
En este apartado vamos a crear un componente dentro de esta funcion App, y lo que creemos ahi dentro, se va a ir al HTML. (Al DOM)
*/


/*
  Por supuesto tambien podemos agregar caracteristicas a style desde fuera. Seria lo mismo que hacerlo desde dentro
  de la funcion. Tambien podemos hacerlo crecer, de esta forma no tenemos que ir creando las cosas dentro de la funcion.
  Lo ponemos fuera de la funcion ya que va a ser reutilizable.
  */


  /*
  Si fueramos unos programadores puta madre, en vez de declarar esto fuera de la funcion, lo que hariamos seria crear el button
  fuera, en un fichero .css y luego importar la parte que necesitemos dentro de nuestro .tsx. Vamos a hacerlo de esta forma.

  const style = {
  button: {
    color: "Blue",
    backgroundColor: "grey",
  }

}
  */




function App() {
  const [count, setCount] = useState(0)





  return (

    /*Vamos a añadir un estilo al boton onClick. Hay una diferenciacion de cuando hablamos HTML a React, por ejemplo, para poner clase
    no es Class = "name", si no que seria ClassName={}. La clave es ver que esto va dentro de llavecitas, lo que significa que va
    a haber logica dentro de ese componente, lo que hara que este fichero sea .tsx en vez de un .html normal 
    */


    /*
    Quitamos el color y background color de dentro del style, ya que lo hemos declarado de forma global desde fuera,
    y asi puede ser reutilizable.
    */

    //Quitamos todo el estilo del boton, porque lo correcto es crear un componente Button
    //Este metodo se considera un METODO INTELIGENTE, YA QUE HACE LAS COSAS EL.
    <>
      
      <button className="Boton personalizado" /*style={color: "Blue", backgroundColor:"green" style.button}*/onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>

    </>
  )
}

export default App
