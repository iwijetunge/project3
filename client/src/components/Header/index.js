import React from "react";
import './index.css';

const Header = props => (

    <header className="w3-cell-row" id="headerrow">
        <div className="w3-cell w3-cell-bottom" id="headercell1">
            <i className="fas fa-paw" style={{float:"left"}}></i><br />
            <i className="fas fa-paw" style={{float:"right"}}></i><br />
            <i className="fas fa-paw" style={{float:"left"}}></i><br />
            <i className="fas fa-paw" style={{float:"right"}}></i><br />
        </div>

        <div className="w3-cell w3-cell-middle" id="headercell2">
            <h1>ani<i className="fas fa-binoculars" id="logo"></i>al tracks</h1>
        </div>

        <div className="w3-cell w3-cell-middle" id="headercell3">
            <i className="fas fa-paw paw2" style={{float:"right"}}></i><br />
            <i className="fas fa-paw paw2" style={{float:"left",marginLeft:"9px"}}></i><br />
            <i className="fas fa-paw paw2" style={{float:"right",marginRight:"12px"}}></i><br />
            <i className="fas fa-paw paw2" style={{float:"left"}}></i><br />
        </div>

        <div className="w3-cell w3-cell-middle" id="headercell4">
            <span className="w3-btn w3-ripple" id="userspan">
                <a href="./login"><i className="fas fa-user-circle"></i>
                <p>User</p></a>
            </span>
        </div>

    </header>



    );

export default Header;