import React, { useState } from 'react';
import './MyForm.css';
import Reservation from '../../Components/Reservation';
import User from '../../Components/User';
import { BsFill1CircleFill } from "react-icons/bs";
import { BsFill2CircleFill } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from 'react-scroll';

const MyForm = () => {

    const [activeMainTab, setActiveMainTab] = useState('user');
    
    return (
        <div className="container my-5">
            <form action="" className='bg-light py-5 myform'>
                <h3 className='text-center'>User Creation and Reservation</h3>
                <ul className="nav bg-white py-2 fw-bold fs-20">
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${activeMainTab === 'user' ? 'active' : ''}`}
                            to="user"
                            spy={true}
                            smooth={true}
                            onClick={() => setActiveMainTab('user')}
                        >
                            <BsFill1CircleFill /> <AiOutlineMinus /> User
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${activeMainTab === 'reservation' ? 'active' : ''}`}
                            to="reservation"
                            spy={true}
                            smooth={true}
                            onClick={() => setActiveMainTab('reservation')}
                        >
                            <BsFill2CircleFill /> <AiOutlineMinus /> Reservation
                        </Link>
                    </li>
                </ul>

                <div className="tab-content my-3">
                    {/* User Main Tab */}
                    <div className={`tab-pane ${activeMainTab === 'user' ? 'active' : ''}`} id="user">
                       <User/>
                    </div>

                    {/* Reservation Main Tab */}
                    <div className={`tab-pane ${activeMainTab === 'reservation' ? 'active' : ''}`} id="reservation">
                       <Reservation/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MyForm