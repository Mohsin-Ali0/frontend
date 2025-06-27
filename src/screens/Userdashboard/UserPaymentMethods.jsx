import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserDashboardLayout from '../../components/UserDashboardLayout/DashboardLayout'
import './index.css'
import UserLockIcon from '../../assets/svg/UserLock'
import axios from 'axios';
import { PaymentIcon } from 'react-svg-credit-card-payment-icons';

export const UserPaymentMethods = () => {

  const location = useLocation();
  const [paymentMethods, setPaymentMethods] = useState([]);
  useEffect(() => {
    // Extract the hash from the location
    const { hash } = location;
    getPaymentMethods();
    // Scroll to the element with the ID corresponding to the hash
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const getPaymentMethods = async () => {
    try {
      const res = await axios.get('user/getUserPaymentMethods');
      console.log(res.data.paymentMethods, 'res.data.paymentMethods')
      setPaymentMethods(res.data.paymentMethods);
    } catch (error) {
      // Show an error message
      // showAlert('Error', 'error', 'An error occurred. Please try again later');
    }
  }
  console.log(paymentMethods, 'paymentMethods')
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

                {/* <input className='p-3 card-input-field' type="text" /> */}
                <div className='d-flex flex-wrap gap-4'>

                  {paymentMethods.length > 0 ? paymentMethods.map((paymentMethod, index) => (
                    <div key={index} className='card-container'>
                      <div className='card-details'>
                        <PaymentIcon type={paymentMethod?.brand} format="flatRounded" width={50} />
                        <div className='card-info'>
                          <p className='card-number'>**** **** **** {paymentMethod.last4}</p>
                          <p className='card-type'>Expiry {paymentMethod.expMonth} / {paymentMethod.expYear}</p>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <p className='user-payment-text1'>No payment methods found</p>
                  )}
                </div>

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
