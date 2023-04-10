import './App.css';
import { useState } from 'react';

function App() {
  const [logs, setLogs] = useState([]);

  function handleMouseOver(event){
    const now = new Date().toLocaleString();
    const elementName = event.target.tagName;
    setLogs((prevLogs) => [...prevLogs, { type: "Mouse Over", time: now, elementName: elementName }]);
  };

  function handleMouseOut(event){
    const now = new Date().toLocaleString();
    const elementName = event.target.tagName;
    setLogs((prevLogs) => [...prevLogs, { type: "Mouse Out", time: now, elementName: elementName }]);
  };

  return (
    <div className='container'>
      <h1 className='tags' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        I am h1
      </h1>
      <h2 className='tags' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        I am h2
      </h2>
      <div className='tags' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        I am div
      </div>
      <h2>Logs:</h2>
      <table className="logsTable">
        <thead>
          <tr>
            <th>Type</th>
            <th>Time</th>
            <th>Element Name</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.type}</td>
              <td>{log.time}</td>
              <td>{log.elementName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
