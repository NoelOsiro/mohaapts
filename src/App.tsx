import React from 'react';
import styled from 'styled-components';
import Dashboard from './Pages/Dashboard';
import Sidebar from './Components/Sidebar';
const App=()=> {
  return (
    <Div>
      <Sidebar/>
      <Dashboard/>
    </Div>
  );
}

export default App;

const Div= styled.div``