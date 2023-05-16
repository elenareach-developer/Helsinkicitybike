import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';

function App() {
  useEffect(()=>{
    fetch('/api/stations/',{
     method:"GET",
     mode: 'no-cors'
    },[])
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  })
  return (
    <div className="App">
     <h1>{title}</h1>
        
    </div>
  );
}

export default App;
