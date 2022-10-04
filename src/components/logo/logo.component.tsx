import React from 'react';
import logo from '../../assets/logo.svg';

import './logo.scss';

const Logo: React.FC = function Logo() {
  return <img src={logo} alt="Moneyleak logo" className="logo" />;
};

export default Logo;
