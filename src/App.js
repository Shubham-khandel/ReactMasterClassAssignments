import './App.css';
import { useState } from 'react';

function App() {
  const arr = ['Good Afternoon', 'Good Evening', 'Good Night', 'Happy Birthday','Good Afternoon', 'Good Evening', 'Good Night', 'Happy Birthday'];
  const [state, setState] = useState('Good Morning');
  const [count, setCount] = useState(0);

  function update() {
    setCount(count + 1);
    setState(arr[count]);
  }

  return (
    <div className='mainContainer'>
      <div className='Container'>
      <h1>Click on Button to see the greetings</h1>
      <h2>{state}</h2>
      <button onClick={update}>Click</button>
      </div>
      
    </div>
  );
}

export default App;
