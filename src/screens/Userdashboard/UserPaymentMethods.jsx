import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserDashboardLayout from '../../components/UserDashboardLayout/DashboardLayout'
import './index.css'
import UserLockIcon from '../../assets/svg/UserLock'

export const UserPaymentMethods = () => {

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
    <div>
      <UserDashboardLayout>
        <div className="">
          <h2 className='User-Dashboard-title' id='PaymentMethodsText'>User Payment Methods</h2>
          <div className="main-card-Section ">
            <p className='user-payment-text1 p-3'>Here you can fill all your saved payment methods</p>
            <div className="card-payment-section">

              <div className="p-4">
                <p className=''>Credit cards</p>
                <input className='p-3 card-input-field' type="text" />
              </div>
            </div>
            <div className="userpayment-dashboard-end">
              <div className="d-flex pt-3 ps-4 gap-2">
                <UserLockIcon />
                <p className='user-payment-text1'>Your payment details are safe. <br />  Thanks to SSL certificates ,all communication is encrypted.</p>
              </div>
            </div>

          </div>
          <div className='mt-5 pb-5 d-flex gap-4 user-action-button justify-content-end'>
            <button className='user-action-button1'>Back to  Home</button>
          </div>
        </div>
      </UserDashboardLayout>
    </div>
  )
}
