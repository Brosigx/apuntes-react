import "./Button.css"



/*
Este componente se considera un componente TONTO, ya que no hace nada, simplemente delega.
*/

interface Param {
    label: string,
    metodoPadre:() => void
}


export const Button = ({label,metodoPadre}:Param) =>{

    return <button className="boton-personalizado" onClick={metodoPadre}>
        {label}
    </button>
}