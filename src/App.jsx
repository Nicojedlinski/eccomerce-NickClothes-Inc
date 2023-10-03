import ComponenteI from "./componentes/NavBar"
import ComponenteA from "./componentes/NavBar"
import Componenten from "./componentes/NavBar"
import ComponenteII from "./componentes/ItemListContainer"
import { useState } from "react"


const App = () => {

  const [seleccionados, setSeleccionados] = useState (0)
  console.log(seleccionados)

  const name = 'nickclothesInc'
  const productos = ['hombres' , 'mujeres']
  const admin = {
    nombre:'nicolas' , 
    appelido: 'jedlinski',
    edad: '23',
  }
  return (
    <>
      <h1>NickClothes Inc</h1>
      <h2>Cart {seleccionados}</h2>
      <button onClick={()=> setSeleccionados(seleccionados + 1)}>Agregar</button>
      <button onClick={()=> setSeleccionados(seleccionados - 1)}>ELiminar</button>
      <div className="componenteI">
        <ComponenteI name = {name} productos = {productos} admin = {admin}/>
       {/* <ComponenteII/> */}
      </div>
    </>
  )
}

export default App