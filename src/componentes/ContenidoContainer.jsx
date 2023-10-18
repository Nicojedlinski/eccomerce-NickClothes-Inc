import React from "react";
import {useState, useEffect} from 'react'


const  ContenidoContainer =  () => {

    const [contador, setContador] = useState (0)

    useEffect(()=> {
        console.log("aca estoy")
    }, [contador] )


    return(
        <>
        <div>Calzado Nike Air </div>
        <p>{contador}</p>
        <button onClick={()=> setContador(contador + 1)}>Agrego</button>
        <div></div>
        <button onClick={()=> setContador(contador - 1)}>Quitar</button>
        </>
    )
}

export default ContenidoContainer