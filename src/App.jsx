import './App.css'
import Lista from './componentes/ListaTareas.jsx'
import { useState } from 'react'
import { v4 as uuidv4} from 'uuid'

function App() {
const [tarea, setTarea] = useState([])

const handleClick = (e) => {
e.preventDefault();

  const tareaNueva = {}

  tareaNueva.id = uuidv4()
  tareaNueva.tarea = e.target.agregar.value;



if (e.target.agregar.value) {
  setTarea([...tarea, tareaNueva])
} else {
  alert('Porvafor coloque alguna tarea!')
}

  e.target.agregar.value = '';

  console.log(tarea)
}

const handleDelete = (id) => {
  const tareaFiltrada = tarea.filter(t => t.id  !== id)
  setTarea(tareaFiltrada);
}


  return (
    <>
     <div className="main-container">
     <h1>Lista de tareas</h1>
      <div className="input">
        <form onSubmit={handleClick}>
      <input type="text" name="agregar" />
        <button type="submit">Agregar</button>
        </form>
      </div>
      <div className="lista">
        <ul>
        {tarea.map((tareas) => (
          <Lista tarea={tareas} key={tareas.id} handleDelete={handleDelete} id={tareas.id}/>
        ))}
        </ul>
      </div>
     </div>
    </>
  )
}
export default App
