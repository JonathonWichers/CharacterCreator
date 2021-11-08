import React from "react";
import '../styles.css';
import dragon from '../images/dragIcon.png';

class Header extends React.Component {
    render() {
        return (
            <div className="Title">
                <img src={dragon} alt="Wizard" />
                <h1>Welcome to the Table-Top Character Creator!</h1>
                
            </div>
        );
    }
}

export default Header;