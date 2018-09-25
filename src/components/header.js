import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Header extends Component {
  isActive(menu) {
    let url = window.location.pathname;
    return url === menu ? ' active' : '';
  }

  render() {
    return (
      <ul className="nav nav-tabs">
        <li className={`nav-item${this.isActive('/')}`}>
        <Link to="/" >Book Shelf</Link>

        </li>
        <li className={`nav-item${this.isActive('/message')}`}>
        <Link to="/view/pdf" >Read Pdf</Link>

        </li>
        <li className={`nav-item${this.isActive('/window')}`}>
        <Link to="/view/epub" >Read Epub</Link>

        </li>
      </ul>
    );
  }
}
