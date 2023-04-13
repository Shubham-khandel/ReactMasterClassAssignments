import React, {useContext} from 'react'
import {Context} from './App'

export function SideTable(){
  // console.log(Context)
  const {state , setEachEle} = useContext(Context)
  // console.log(state)

  function handleChange(x){
    setEachEle(x)
  }
    return(
      <div className='sideTableContainer'>
        <h1>Post List</h1>
      {
        state.map((x)=>{
         return <ul>
            <li onClick={()=>handleChange(x)}>{x.title}</li>
          </ul>
        })
      }
      </div>
    
    )
}