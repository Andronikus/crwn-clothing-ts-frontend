import React from 'react';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


import Header from './components/header/header.component';



import './App.css';


const Layout = styled.div`
  width: 100%;
  padding: 2rem 6rem;
`;


function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Header />
        
        <h1>Happy Hacking!</h1>
    </BrowserRouter>
    </Layout>
  );
}

export default App;
