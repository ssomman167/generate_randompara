import React from 'react'

function Show({data,showit}) {
  return (
    <div>
        
            {
                data.map((elem,index)=>{
                    return <h3 key={index}>{elem}</h3>
                })
                
            }
        
    </div>
  )
}

export default Show