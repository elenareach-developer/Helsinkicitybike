import logo from './logo.svg';
import './App.css';
import React from 'react';
import Dashboard from './components/dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
              <Routes>
                <Route path="/" element={ <Dashboard />}>
                  <Route path="/stations" element={ <Dashboard view="SortOrders"/>} />
                  <Route path="/journey" element={ <Dashboard view="Orders"/>} />
                </Route>
              </Routes>
          </BrowserRouter>
  
    </div>
  );
}

export default App;
