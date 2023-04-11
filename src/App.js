import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((dataa) => setData(dataa));
  }, []);

  function onClickData() {
    setData([]);
  }

  function deletee(index) {
    let newData = data.filter((elem, i) => {
      return i != index;
    });
    setData(newData);
  }
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Body</th>
            <th>Id</th>
            <th>Title</th>
            <th>UserId</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.body}</td>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.userId}</td>
                <span onClick={() => deletee(index)}>X</span>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={onClickData}>Clear Data</button>
    </div>
  );
}

export default App;
