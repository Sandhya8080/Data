import React, { useState } from 'react' 

export default function Counter() {
    const [count,setCount] = useState(10)
    const [backgroundColor,setbackgroundColor] = useState("pink")
    function handleIncrement(){
        setCount(count+1)
    } 
    
    
  return (
    <div style={{
      color :'red',
      fontSize : '30px',
      backgroundColor: backgroundColor
    }}>
      <button onClick={()=>setbackgroundColor("Red")}>Red</button>
      <button onClick={()=>setbackgroundColor("Blue")}>Blue</button>
      <button onClick={()=>setbackgroundColor("Black")}>Black</button>
      <button onClick={()=>setbackgroundColor("Grey")}>Grey</button>
      <button onClick={()=>setbackgroundColor("Violet")}>Violet</button>
        <h1>Count: {count}</h1>
        <button onClick ={handleIncrement}>Increment Count</button>
    </div>
  )

}