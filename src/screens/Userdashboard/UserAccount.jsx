import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserDashboardLayout from '../../components/UserDashboardLayout/DashboardLayout';
import './index.css';
import UserCheck from '../../assets/svg/Usercheck';
import Useremailaccount from '../../assets/svg/UserEmailAccount';
import RingIcon from '../../assets/svg/RingIcon';
import { Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

export const UserAccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [notificationPromotion, setNotificationPromotion] = useState(false);
  const [newsDiscountPromotion, setNewsDiscountPromotion] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserData();
    const { hash } = location;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const getUserData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('user/getUserAccountDetails');
      setUserData(res.data.data);
      setNotificationPromotion(res.data.data.notification_promotion);
      setNewsDiscountPromotion(res.data.data.news_discount_promotion);
    } catch (err) {
      console.error('Error fetching user data:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateUserInfo = async () => {
    console.log('UpdateduserData:', {
      ...userData,
      notification_promotion: notificationPromotion,
      news_discount_promotion: newsDiscountPromotion,
    });
    return
    try {
      const res = await axios.put('user/updateUserAccountDetails', {
        ...userData,
        notification_promotion: notificationPromotion,
        news_discount_promotion: newsDiscountPromotion,
      });
      console.log('User info updated:', res.data);
    } catch (err) {
      console.error('Error updating user info:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
              {loading ? <Skeleton width={300} height={40} /> :
                <>
                  <UserCheck />
                  <p className='userAccountparagraph'>
                    {userData?.email}
                  </p>
                </>

              }

            </div>
          </div>
        </div>

        <Container className="User-dashboard-email-box mt-4">
          <div className="userAcc-Inner-container">
            <Row className="justify-content-around gap-4">
              <Col xl={5} lg={5} md={5} xs={12}>
                <p className='user-account-text1'>First Name</p>

                {loading ? <Skeleton height={40} /> : <>
                  <Form.Control
                    type="text"
                    className="userAccount-input"
                    placeholder="First Name"
                    name="first_name"
                    value={loading ? '' : userData?.first_name || ''}
                    onChange={handleInputChange}
                    disabled={loading}
                  />

                </>}
              </Col>
              <Col xl={5} lg={5} md={5} xs={12}>
                <p className='user-account-text1'>Last Name</p>
                {loading ? <Skeleton height={40} /> : <>
                  <Form.Control
                    type="text"
                    className="userAccount-input"
                    placeholder="Last Name"
                    name="last_name"
                    value={loading ? '' : userData?.last_name || ''}
                    onChange={handleInputChange}
                    disabled={loading}
                  />

                </>}
              </Col>
            </Row>
          </div>
        </Container>

        <div className="container User-dashboard-email-box mt-4">
          <div className="userAcc-Inner-container">
            <div className="d-flex justify-content-between">
              <p className='user-account-text1'>Email notifications</p>
              <RingIcon />
            </div>
            <div className="d-flex gap-2">
              <input
                checked={notificationPromotion}
                onChange={() => setNotificationPromotion(!notificationPromotion)}
                className="form-check-input userAccount-check-input"
                type="checkbox"
                id="flexCheck1"
                disabled={loading}
              />
              <label className='userAccountparagraphP' htmlFor="flexCheck1">
                Notification about your active promotion, payments and other action (<span className='useraccount-spec'>Recommended</span>)
              </label>
            </div>
            <div className="d-flex gap-2 my-3">
              <input
                checked={newsDiscountPromotion}
                onChange={() => setNewsDiscountPromotion(!newsDiscountPromotion)}
                className="form-check-input userAccount-check-input"
                type="checkbox"
                id="flexCheckDefault2"
                disabled={loading}
              />
              <label className='userAccountparagraphP' htmlFor="flexCheckDefault2">
                News, discount, etc (<span className='useraccount-spec'>Recommended</span>)
              </label>
            </div>
          </div>
        </div>
        <div className='mt-5 pb-5 d-flex gap-4 user-action-button justify-content-end'>
          <button className='user-action-button1' onClick={() => navigate('/channels')}>Back to Home</button>
          <button className='user-action-button2' onClick={updateUserInfo} disabled={loading}>Save</button>
        </div>
      </div>
    </UserDashboardLayout>
  );
};