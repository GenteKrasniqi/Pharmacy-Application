import React from 'react'
import { useState, useEffect } from "react";
import DashboardLayout from '../components/SideBar';
import { Link } from 'react-router-dom';

//Images
import productIcon from '../assets/img/products-icon.png';
import accordionIcon from '../assets/img/accordion-lines-icon.png';
import subscriberIcon from '../assets/img/subscriber-icon.png';
import messsagesIcon from '../assets/img/messages-icon.png';

const Dashboard = () => {

    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <div className="dashboardHeroHolder">
                <DashboardLayout />
                <div className="dashboardForm">

                    <h4>Hi Admin, today date's is {date.toDateString()}  </h4>
                    <h3>Explore the following sections to manage your store efficiently. </h3>
                    <div className='boxDashboard'>

                        <Link to='/dashboard/products'>
                            <div className='box'>
                                <p>1. Products</p>
                                <div className='imgofbox'>
                                    <img src={productIcon} alt="" />
                                </div>
                                <p>Mange Products to keep your store updated.</p>
                            </div>
                        </Link>


                        <Link to='/dashboard/accordion'>
                            <div className='box'>
                                <p>2. Accordion</p>
                                <div className='imgofbox'>
                                    <img src={accordionIcon} alt="" />
                                </div>
                                <p>Review your Accordion to keep your users well informed. </p>
                            </div>
                        </Link>

                        <Link to='/dashboard/subscriptions'>
                            <div className='box'>
                                <p>3. New Subscriptions</p>
                                <div className='imgofbox'>
                                    <img src={subscriberIcon} alt="" />
                                </div>
                                <p>View your new Subscribers to keep them informed. </p>
                            </div>

                        </Link>

                        <Link to='/dashboard/messages'>
                            <div className='box'>
                                <p>4. New Messages</p>
                                <div className='imgofbox'>
                                    <img src={messsagesIcon} alt="" />
                                </div>
                                <p>Review your latest messages and assist your clients.</p>
                            </div>
                        </Link>
                    </div>

                    <p id='builtBy'>Built by UBT students : Gentë Krasniqi & Valmire Stublla</p>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
