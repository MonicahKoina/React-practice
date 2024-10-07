import React from 'react'
import  {useState} from 'react';

function Stringupdate() {
    const[name, setName]=useState();
  return (
    <>
    <p>Name:{name}</p>
    <button onClick={(()=>{
        setName("Monicah");
    })}>SET NAME</button>
    </>
  )
}

export default Stringupdate