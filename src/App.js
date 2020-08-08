import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './components/MenuComponent';
import { DISHES } from '../src/shared/dishes';
import './App.css';

function App() {
  return (
    <div>
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>      
    </Navbar>
    
    <Menu dishes={DISHES} />
  </div >
  );
}

export default App;
