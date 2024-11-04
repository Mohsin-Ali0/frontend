import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserDashboardLayout from '../../components/UserDashboardLayout/DashboardLayout'
import './index.css'
export const UserPaymentHistory = () => {

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
      <div className="">
        <h2 className='User-Dashboard-title' id='PaymentHistoryText'>User Payment History</h2>
        <div className="main-card-Section pb-5">
          <div className="paymenthistory-Main d-flex justify-content-between">
            <p className='user-payment-no'>Payments: 1</p>

            <div className='d-flex'>
              <select class="form-select card-select-option" aria-label="Default select example">
                <option selected>Entire Period</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

          </div>

          <div className="p-3 table-section-payment TableResponsive">

            <table class="table table-responsive  ">
              <thead class="table-light">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Payment method</th>
                  <th scope="col">Invoice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >29 Aug, 2024 22:15</td>
                  <td>$49</td>
                  <td>By card</td>
                  <td>Payment</td>
                </tr>

              </tbody>
              <tbody>
                <tr>
                  <td >29 Aug, 2024 22:15</td>
                  <td>$49</td>
                  <td>By card</td>
                  <td>Payment</td>
                </tr>

              </tbody>
              <tbody>
                <tr>
                  <td >29 Aug, 2024 22:15</td>
                  <td>$49</td>
                  <td>By card</td>
                  <td>Payment</td>
                </tr>

              </tbody>
              <tbody>
                <tr>
                  <td >29 Aug, 2024 22:15</td>
                  <td>$49</td>
                  <td>By card</td>
                  <td>Payment</td>
                </tr>

              </tbody>
              <tbody>
                <tr>
                  <td >29 Aug, 2024 22:15</td>
                  <td>$49</td>
                  <td>By card</td>
                  <td>Payment</td>
                </tr>

              </tbody>
              <tbody>
                <tr>
                  <td>29 Aug, 2024 22:15</td>
                  <td>$49</td>
                  <td>By card</td>
                  <td>Payment</td>
                </tr>

              </tbody>
              <tbody>
                <tr>
                  <td >29 Aug, 2024 22:15</td>
                  <td>$49</td>
                  <td>By card</td>
                  <td>Payment</td>
                </tr>

              </tbody>
              <tbody>
                <tr>
                  <td>29 Aug, 2024 22:15</td>
                  <td>$49</td>
                  <td>By card</td>
                  <td>Payment</td>
                </tr>

              </tbody>
            </table>
          </div>


        </div>
        <div className='mt-5 pb-5 d-flex gap-4 user-action-button justify-content-end'>
          <button className='user-action-button1'>Back to  Home</button>
        </div>
      </div>
    </UserDashboardLayout>
  )
}
