import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state

  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }

  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
          <ul className="menu">
            <li className="menu"><Link to='/admin/home'>Home</Link></li>
            <li className="menu"><Link to='/admin/category'></Link></li>
            <li className="menu"><Link to='/admin/product'>Contract management</Link></li>
            <li className="menu"><Link to='/admin/order'>Add Contract</Link></li>
            <li className="menu"><Link to='/admin/customer'></Link></li>
          </ul>
        </div>
        <div className="float-right">
          {/* Empty div for spacing */}
          <div style={{ marginRight: '10px' }}></div>

          {/* Button for "Add Contract" outside of the menu */}
          <button style={{ color: 'red', fontWeight: 'bold', cursor: 'pointer' }}>
            <Link to='/admin/order' style={{ color: 'inherit', textDecoration: 'none' }}>Add Contract</Link>
          </button>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
}

export default Menu;
