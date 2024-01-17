import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import React from 'react';

const Dashboard = () => {
    const [role, setRole] = useState(null);

    const [date, setDate] = useState(new Date());

    const logOut = () => {
        window.localStorage.clear();
        window.location.replace('/');
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <div className="header">                
                <div className="textBox">                    
                    <p><a href="/dashboard">Pharm Store Management</a></p>
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

export default Dashboard;