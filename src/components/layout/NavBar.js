import React, { Component } from 'react';
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NavBar extends Component {

    render() {
        return (
          <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-danger fixed-top">
              <a className="navbar-brand col-sm-3 col-md-2 mr-0">iPoke</a>
              <div>
                <FontAwesomeIcon icon={faCartArrowDown} className="cart" size="2x" onClick={console.log('bla')}/>
              
              </div>
              
            </nav>
            
            
          </div>
        )
    }
}