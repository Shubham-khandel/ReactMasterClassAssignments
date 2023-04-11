import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [sname, setSname] = useState('');
  const [data, setData] = useState([]);

  function firstNameData(event) {
    setName(event.target.value);
  }
  function numberNumber(event) {
    setNumber(event.target.value);
  }

  function secondNameData(event) {
    setSname(event.target.value);
  }
  function emailData(event) {
    setEmail(event.target.value);
  }

  function submitData(event) {
    event.preventDefault();
    setData([
      ...data,
      { name: name, sname: sname, email: email, number: number },
    ]);
    setEmail('')
    setName('')
    setNumber('')
    setSname('')
    // console.log({name,email,password,number})
  }

  return (
    <div className='mainContainer'>
      <form>
        <input placeholder='Enter Your First Name' value={name} type="text" onChange={firstNameData} />
        <input placeholder='Enter Your Last Name' value={sname} type="text" onChange={secondNameData} />
        <input placeholder='Enter Your Email' value={email} type="email" onChange={emailData} />
        <input placeholder='Enter Your Mobile No' value={number} type="number" onChange={numberNumber} />
        <button onClick={submitData}>Click to Submit</button>
      </form>

      <h1>{name}</h1>
      <h1>{sname}</h1>
      <h1>{email}</h1>
      <h1>{number}</h1>

          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody >
            {data.map((x,index)=>{
             return <tr key={index}>
                <td>{x.name}</td>
                <td>{x.sname}</td>
                <td>{x.email}</td>
                <td>{x.number}</td>
              </tr>
            })}
            </tbody> 
          </table>
      
    </div>
  );
}


export default App;
