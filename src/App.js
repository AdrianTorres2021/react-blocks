import React from 'react';
import './Components/estilos.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Subcontents from './Components/Subcontents'
import Advertisement from './Components/Advertisement';
 
                
function App() {
  return (
    <div className="app-container">
        <Header />
        <Navigation />
        <Main>
            <div className="subcontent-container" id="contenedor-en-main">
            <Subcontents />
            <Subcontents />
            <Subcontents />
            </div>
            <Advertisement />
        </Main>
    </div>
  );
}
                
export default App;



