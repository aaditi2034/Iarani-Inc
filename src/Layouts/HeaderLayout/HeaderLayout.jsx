import React from 'react';
import logo from '../../assets/img/logo.png'
import './header.css';

const Header = () => (
  <header className='headerContainer d-flex align-items-center'>
    <div className='ml-3'>
      <img src={logo} alt='notfound' width='165px' />
    </div>
  </header>
);

export default Header;
