import React, { useState } from 'react';
import { NavData, NavIcon } from './NavData';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/components/Nav.css';
import { AiOutlineClose } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigation = () => {
    
    return (
        <div className='bar'>
                <div className='top'>
                    <NavLink to="/" className="logo">
                        <img src='./img/logo_013.png' alt='logo' />
                    </NavLink>
                </div>

            <div className='mid'>
                <ul className='navList'>
                    {NavData.map((val, key) => {
                        return (
                            <li 
                            key={key} 
                            className={val.cName}
                            id={window.location.pathname == val.path ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.path
                            }}>
                                <div id="title"> 
                                    {val.title}
                                </div>
                            </li>
                        )
                    })}               
                </ul>
            </div>

                <div className='bot'>
                        {NavIcon.map((val, key) => {
                            return(
                                <span 
                                className='icons'
                                key={key}>
                                    <a href={val.links}>
                                        {val.icon}
                                    </a>
                                </span>
                            )
                        })}
                </div>
        </div>
        /*<div style={{code css}}>*/
    );
};

export default Navigation;