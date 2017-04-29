import React from 'react';
import {Link} from 'react-router-dom';

class MenuBar extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav"  id="navbarNav">
            <li className="nav-item active"><Link className="nav-link" to='/'>Home</Link></li>
            <li className="nav-item active"><Link to='/about'>About</Link></li>
          </ul>
          </div>
        </nav>
      </header>);
  }
}

export default MenuBar;