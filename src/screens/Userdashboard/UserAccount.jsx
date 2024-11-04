import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserDashboardLayout from '../../components/UserDashboardLayout/DashboardLayout'
import './index.css'
import UserCheck from '../../assets/svg/Usercheck'
import Useremailaccount from '../../assets/svg/UserEmailAccount'
import RingIcon from '../../assets/svg/RingIcon'

export const UserAccount = () => {
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
    <UserDashboardLayout>
      <div id="AccountSettingText">
        <h2 className='User-Dashboard-title' id="AccountSettingText">Account settings</h2>

        <div className="container User-dashboard-email-box">
          <div className="userAcc-Inner-container">
            <div className="d-flex justify-content-between">
              <p className='user-account-text1'>Your email address</p>
              <Useremailaccount />

            </div>
            <div className="d-flex gap-2">
              <UserCheck />
              <p className='userAccountparagraph'>info@animationfeast.com</p>
            </div>
          </div>

        </div>
        <div className="container User-dashboard-email-box mt-4">
          <div className="userAcc-Inner-container">
            <div className="d-flex justify-content-between">
              <p className='user-account-text1'>Email notifications</p>
              <RingIcon />
            </div>
            <div className="d-flex gap-2">
              <input checked class="form-check-input userAccount-check-input" type="checkbox" value="" id="flexCheck1" />
              <label className='userAccountparagraphP' for="flexCheck1">Notification about your active promotion, payments and other action (<span className='useraccount-spec'>Recommended</span>)</label>
            </div>
            <div className="d-flex gap-2 my-3">
              <input class="form-check-input userAccount-check-input" type="checkbox" value="" id="flexCheckDefault2" />
              <label className='userAccountparagraphP' for="flexCheckDefault2">
                News, discount, etc (<span className='useraccount-spec'>Recommended</span>)
              </label>
            </div>
            <div className="d-flex gap-2">
              <input class="form-check-input userAccount-check-input" type="checkbox" value="" id="flexCheckDefault22" />
              <label className='userAccountparagraphP' for="flexCheckDefault22">Notification about new achivements on the channel</label>
            </div>

          </div>

        </div>
        <div className='mt-5 pb-5 d-flex gap-4 user-action-button justify-content-end' >
          <button className='user-action-button1'>Back to  Home</button>
          <button className='user-action-button2'>save</button>
        </div>
      </div>


    </UserDashboardLayout>
  )
}
