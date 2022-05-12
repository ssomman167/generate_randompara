import { useState } from "react"
import data from "./data"
import "./index.css"
import Show from "./Show"

const App = () => {
 const [index,setIndex]=useState(0)
 const [show,setShow]=useState(false)
    const getval=(event)=>{
        setIndex(event.target.value)
        setShow(false)

    }

    const showit=()=>{
        setShow(true)
    }


  return (
    <div className="main">
        <h1>Tired of lorem ipsum</h1>
        <input className="input" placeholder="No of para" onChange={(event)=>{
           setIndex(event.target.value)
           setShow(false)
        }}/>
        
        <button className="input" onClick={showit}>SUBMIT</button>

  {
      show?<Show data={data.slice(0,index)}  showit={showit}/>:""
     
  }

    </div>
  )
}

export default App