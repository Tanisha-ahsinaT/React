import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]= useState(0);
  const addValue= () =>{
    console.log("Value added");
    //counter=counter+1;
    setCounter(counter+1);
   }

   const delValue=()=>{
    console.log("Value deleted")
   }
  //let counter=15;
  return (
    <>
         <h1>Chai or react</h1>
         <h2>counter value: {counter}</h2>
         <button onClick={addValue}>Add Value</button>
         <br />
         <button onClick={delValue}>Delete Value</button>
    </>
  )
}

export default App
