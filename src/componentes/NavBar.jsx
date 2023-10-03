import React from 'react'
import ComponenteII from './ItemListContainer'

const ComponenteI = ({productos, admin , name}) => {
  console.log(productos)
  console.log(admin)


  return (
    <div>
      <h1>Categorias</h1>
      <ul>
        <li><a href=" ">Remeras</a></li>
        <li><a href=" ">Pantalones</a></li>
        <li><a href=" ">Zapattillas</a></li>
      </ul>
      <h2> {name} </h2>
      {/* <ComponenteI/> */}
      <ComponenteII/>
    </div>
  )
}

export default ComponenteI