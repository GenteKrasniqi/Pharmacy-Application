import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    
    const logOut = () => {
        window.localStorage.clear();
        window.location.replace('/');
    }
    return (
        <>
            <div className="header">                
                <div className="textBox">     
                <Link to="/dashboard">
                    <p>Pharm Store Management</p>
                </Link>               
                </div>
                <div className="dashboardNav">
                        <ul>                            
                            <li><NavLink to="/dashboard/products">Products</NavLink></li>
                            <li><NavLink to="/dashboard/accordion">Accordion</NavLink></li>                            
                            <li><NavLink to="/dashboard/subscriptions">Subscriptions</NavLink></li>
                            <li><NavLink to="/dashboard/messages">Messages</NavLink></li>
                        </ul>
                </div>
                <div className="btnLog">
                    <button onClick={logOut}>Log Out</button>
                </div>
            </div>
            </>
    );
}

export default SideBar;