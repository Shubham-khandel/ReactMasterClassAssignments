import './App.css';
import { useState } from 'react';

function App() {
  
  const [num , setNum] = useState(1)

  const arr = [1,2,3,4,5,6,7,8,9,10]
  const randomNum = Math.floor(Math.random()*100 + 1)
  

  function tablee(){
    setNum(randomNum)
  }
  
  return (
    <div className='mainContainer'>
      <div className='Container'>
        <h1>Table of {num}</h1>
      {
        arr.map((x, index)=>{
         return <ul key={index}>
           <li>{`${x}${'.'}`}</li><li key={index}>{x*num}</li>
          </ul>
        })
      }
      <button  onClick={tablee}>Click</button>
      </div>
      
    </div>
  );
}

export default App;
