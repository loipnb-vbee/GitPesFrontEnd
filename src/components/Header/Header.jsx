import { useState } from 'react';
import { HeaderContainer } from './index.style';
import { Link } from 'react-router-dom';
import logoVbee from '../../assets/Logo/vbee-logo.png';
import Navbar from './Navbar/Navbar';

const Header = () => {
  const [isFloat, setIsFloat] = useState(false);
  function setFloat() {
    if (window.scrollY > 0) {
      setIsFloat(true);
    } else {
      setIsFloat(false);
    }
  }
  window.addEventListener('scroll', setFloat);
  return (
    <HeaderContainer>
      <div className="header">
        <Link to="/" className="headerLogoTitle">
          <img className="logoWC" src={logoVbee} alt="logo" />
          <h1 className="title">Vbee PES League</h1>
        </Link>
        <Navbar parentClassName="button-Item-Type-1" />
      </div>
      <div className={isFloat ? 'header-float' : 'hidden'}>
        <Link to="/" className="headerLogoTitle">
          <img className="logoWC" src={logoVbee} alt="logo" />
          <h1 className="title">Vbee PES League</h1>
        </Link>
        <Navbar parentClassName="button-Item-Type-2" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
