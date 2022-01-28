import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Menu.css';

const Navigation = () => {
    return (
        <div className='menu'>
            <div className="hautMenu">
                <NavLink to="/" className="linkMenu nomSite"><h1 className="nomSite">Logo</h1></NavLink>
            </div>
            <div className="milieuMenu">
                <NavLink exact to="/" className="linkMenu"><button className="boutonMenu categorieMenu">Home</button></NavLink>
                <NavLink exact to="/about" className="linkMenu"><button className="boutonMenu categorieMenu">About me</button></NavLink>
                <NavLink exact to="/work" className="linkMenu"><button className="boutonMenu categorieMenu">Work</button></NavLink>
            </div>
        </div>
    );
};

export default Navigation;