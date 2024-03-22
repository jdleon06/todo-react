import { useState } from 'react'
import './listaTareas.css'

function Lista({tarea, handleDelete, id}) {

    const [completada, setCompletada] = useState(false)

    const handleComplete = () => {
        setCompletada(!completada)
    }

    return(
        <>
        <li className={completada ? 'completada' : 'incompleta'}>
         <span className='tarea-texto'>{tarea.tarea}</span>
         <span><button className='tarea-boton-borrar' type="button" onClick={() => handleDelete(id)}>Eliminar</button></span>
         <span><button className='tarea-boton-completada' type="button" onClick={handleComplete}>Completada</button></span>
        </li>
        </>
    )
}


export default Lista