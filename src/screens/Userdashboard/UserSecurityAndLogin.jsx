import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserDashboardLayout from '../../components/UserDashboardLayout/DashboardLayout'
import './index.css'
import UserLockIcon from '../../assets/svg/UserLock'
import UserLogoutIcon from '../../assets/svg/userLogout'
import FancyUserIcon from '../../assets/svg/FancyUser'
export const UserSecurityAndLogin = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract the hash from the location
    const { hash } = location;

    // Scroll to the element with the ID corresponding to the hash
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div> <UserDashboardLayout>
      <div className="">
        <h2 className='User-Dashboard-title' id='SecurityAndLoginText'>User Security And Login</h2>
        <div className="container User-dashboard-email-box">
          <div className="userAcc-Inner-container ">
            <div className="">
              <div className="d-flex justify-content-between">
                <p className='user-account-text1'>Change Password</p>
                <div className="user-sec-lock">
                  <UserLockIcon />
                </div>
              </div>
             
              <div className=" mt-2 d-flex p-0 flex-wrap align-items-center justify-content-between container">
                <div className="">
                  <p className='userdashboard-password'>Old Password</p>
                  <input className='user-password-input' type="text" />
                </div>
                <div className="">
                  <p className='userdashboard-password'>New Password</p>
                  <input className='user-password-input' type="text" />
                </div>
                <div className="">
                  <p className='userdashboard-password'>Confirm Password</p>
                  <input className='user-password-input' type="text" />
                </div>

              </div>
              <div className='mt-5 pb-5 user-save-password '>
                <button className='user-action-button2'>Change Password</button>
              </div>
            </div>

          </div>
        </div>
        <div className="container User-dashboard-email-box mt-3">
          <div className="userAcc-Inner-container d-flex justify-content-between align-items-center">
            <div className="">
              <p className='user-account-text1'>My Sessions</p>
              <div className="d-flex gap-4">
                <UserLogoutIcon />
                <p className='userAccountparagraph3'>Log out from this device</p>
              </div>
              <div className="d-flex gap-4">
                <UserLogoutIcon />
                <p className='userAccountparagraph2'>Log out of all sessions</p>
              </div>
            </div>
          </div>

        </div>
        <div className="container User-dashboard-email-box mt-3">
          <div className="userAcc-Inner-container d-flex justify-content-between align-items-center">
            <p className='UserDeleteAccount'>You Can <span className='UserDeleteAccountspan'>delete your account</span> </p>
            <div className="user-sec-profile">

            <FancyUserIcon />
            </div>
          </div>

        </div>
        <div className='mt-5 pb-5 d-flex gap-4 user-action-button justify-content-end'>
          <button className='user-action-button1'>Back to  Home</button>
          <button className='user-action-button2'>save</button>
        </div>
      </div>
    </UserDashboardLayout>

    </div>
  )
}
