import React,{useContext} from 'react'

import {Context} from './App'

export function Details(){
  const {eachEle} = useContext(Context)
  console.log(eachEle)
  
  // console.log(list)
  return(
    <div className='detailsBox'>
      <div className='detailCont'>
      <h1>Post Details</h1>
      <li>{eachEle.userId}</li>
      <li>{eachEle.id}</li>
      <li>{eachEle.title}</li>
      <li>{eachEle.body}</li>
      </div>
      

    </div>
  )
}