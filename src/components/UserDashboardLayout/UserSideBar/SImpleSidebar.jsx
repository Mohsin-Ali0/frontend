import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Index.css"
import UserProfile from '../../../assets/svg/UserProfile';
import UserIcon from '../../../assets/svg/UserIcon';
import UserCheck from '../../../assets/svg/Usercheck';
import UserLockIcon from '../../../assets/svg/UserLock';
import UserCardIcon from '../../../assets/svg/CardIcon';
import UserHistoryIcon from '../../../assets/svg/UserHistory';
export default function SImpleSidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const menuItem = [
    {
      path: "/user/account/#AccountSettingText",
      name: "Account",
      icon: <UserProfile />
    },
    {
      path: "/user/security/#SecurityAndLoginText",
      name: "Security and login",
      icon: <UserLockIcon />
    },
    {
      path: "/user/paymentmethods/#PaymentMethodsText",
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
      <div className="MobileMenuBar">


        <div className="User-Dashoard-page">
          <div className="container p-0">
            <div className="User-Dasboard-Menu-For-mobile">
              <div className="d-flex justify-content-between">
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

                <input type="checkbox" id="checkbox" onClick={toggleDropdown} />
                <label for="checkbox" class="toggle">
                  <div class="bars" id="bar1"></div>
                  <div class="bars" id="bar2"></div>
                  <div class="bars" id="bar3"></div>
                </label>
              </div>
              <hr className="divide-Menu-Section" />
              {isDropdownOpen && (
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
                        <div className="SideMenuText">{item.name}</div>
                      </div>
                    </NavLink>
                  ))}
                </div>
              )}
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
