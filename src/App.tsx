import React from 'react';
import styled from 'styled-components';
import Dashboard from './Pages/DashBoard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import {Route,Routes} from "react-router-dom";
import Houses from './Pages/Houses/Houses';

const App=()=> {
  return (
    <Div>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/houses' element={<Houses/>}/>  
        <Route path='/tenants' element={<Dashboard/>}/> 
        <Route path='/account' element={<Dashboard/>}/> 
        <Route path='/services' element={<Dashboard/>}/> 
        <Route path='/analytics' element={<Dashboard/>}/> 
      </Routes>
    </Div>
  );
}

export default App;

const Div= styled.div``