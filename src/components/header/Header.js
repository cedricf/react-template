import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
         <li className="nav-item active"><Link to='/'>Home</Link></li>
         <li className="nav-item active"><Link to='/about'>About</Link></li>
       </ul>
       </div>
    </nav>);
  }
}

export default Header;