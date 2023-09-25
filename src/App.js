import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/home" exact element={<Login/>}/>
        <Route path="/create" exact element={<Create/>} />
        <Route path="/dashboard" exact element={<Dashboard/>} />
        
        <Route path="/dashboard/:id" element={<UserDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
