import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Index.css"
import UserProfile from '../../../assets/svg/UserProfile';
import UserIcon from '../../../assets/svg/UserIcon';
import UserCheck from '../../../assets/svg/Usercheck';
import UserLockIcon from '../../../assets/svg/UserLock';
import UserCardIcon from '../../../assets/svg/CardIcon';
import UserHistoryIcon from '../../../assets/svg/UserHistory';

export default function UserDashboardSideBar() {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/user/account",
            name: "Account",
            icon: <UserProfile />
        },
        {
            path: "/user/security",
            name: "Security and login",
            icon: <UserLockIcon />
        },
        {
            path: "/user/paymentmethods",
            name: "Payment methods",
            icon: <UserProfile />
        },
        {
            path: "/user/paymentmethodshistory",
            name: "Payment history",
            icon: <UserHistoryIcon />
        }
    ];

    return (
        <>
            <div className="Main-UserDashborad-Menu">


                <div className="User-Dashoard-page">
                    <div className="container">
                        <div className="User-Dasboard-Menu">
                            <div className="User-Sidebar-Top d-flex gap-2">
                                <UserIcon className="UserIcon" />
                                <div className="">
                                    <p className='User-Email'>Info@animationfeast.com</p>
                                    <div className="d-flex gap-1">
                                        <UserCheck className="UserIcon" />
                                        <span className='User-Verfication-Text'>Verified</span>
                                    </div>
                                </div>
                            </div>
                            <hr className="divide-Menu-Section" />
                            <div className='d-flex flex-column'>
                                {menuItem.map((item, index) => (
                                    <NavLink
                                        to={item.path}
                                        key={index}
                                        className='Single-Menu-Line'
                                        activeClassName="active"

                                    >
                                        <div className="d-flex gap-2 align-items-center">
                                            {item.icon}
                                            <div className="SideMenuText mt-1">{item.name}</div>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containerMain">
                    <div className="sidebar"></div>
                </div>
            </div>
        </>
    )
}
