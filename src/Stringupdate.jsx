import React from 'react'
import  {useState} from 'react';

function Stringupdate() {
    const[name, setName]=useState();
    const[age, setAge]=useState(0);
  return (
    <>
    <p>Name:{name}</p>
    <button onClick={(()=>{
        setName("Monicah");
    })}>SET NAME</button>
    <p>Age:{age}</p>
    <button onClick={(()=>{setAge(age + 1)})}>Increment</button>
    </>
  )
}

export default Stringupdate