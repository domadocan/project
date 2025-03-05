import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          {/* <li><Link to="/auntieAnnes">소개</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
