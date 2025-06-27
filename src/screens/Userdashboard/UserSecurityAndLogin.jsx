import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserDashboardLayout from '../../components/UserDashboardLayout/DashboardLayout'
import './index.css'
import UserLockIcon from '../../assets/svg/UserLock'
import UserLogoutIcon from '../../assets/svg/userLogout'
import FancyUserIcon from '../../assets/svg/FancyUser'
import { Col, Container, Row } from 'react-bootstrap';
import CustomInput from '../../components/CustomInput';
import Swal from 'sweetalert2';
import axios from 'axios';
export const UserSecurityAndLogin = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

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


  const HandleChangePass = async () => {
    if (!formData.password || !formData.newPassword || !formData.confirmPassword) {
      showAlert('Error', 'error', 'Please fill all fields');
      return;
    }
    if (formData.password === formData.newPassword) {
      showAlert('Error', 'error', 'New password should not be the same as old password');
      return;
    }
    if (formData.newPassword.length < 8) {
      showAlert('Error', 'error', 'Password should be at least 8 characters');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      showAlert('Error', 'error', 'New password and confirm password do not match');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.put('user/ChangeUserPassword', {
        oldPassword: formData.password,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword,
      });
      if (res) {
        showAlert('Success', 'success', 'Password changed successfully');
        setFormData({
          password: '',
          newPassword: '',
          confirmPassword: '',
        });
      }

    } catch (err) {
      console.error('Error changing password:', err);
      showAlert('Error', 'error', `${err.response?.data?.message}`);
    } finally {
      setLoading(false);
    }
  };

  const showAlert = (title, icon, message, callback) => {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed && callback) {
        callback();
      }
    });
  };


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

              <Container >
                <Row>
                  <Col
                    lg={4}
                    md={12}
                    sm={12}
                    xs={12}

                  >
                    <p className='userdashboard-password'>Old Password</p>
                    <CustomInput
                      labelClass="PassmainInputLabel bold mob-resp"
                      type="password"
                      id="password"
                      placeholder="Enter Old password"
                      inputClass="PassmainInput "
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                  </Col>
                  <Col
                    lg={4}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <p className='userdashboard-password'>New Password</p>
                    <CustomInput
                      labelClass="PassmainInputLabel bold mob-resp"
                      type="password"
                      id="password"
                      placeholder="Enter New password"
                      inputClass="PassmainInput "
                      onChange={(e) =>
                        setFormData({ ...formData, newPassword: e.target.value })
                      }
                    />
                  </Col>
                  <Col
                    lg={4}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <p className='userdashboard-password'>Confirm Password</p>
                    <CustomInput
                      labelClass="PassmainInputLabel bold mob-resp"
                      type="password"
                      id="password"
                      placeholder="Confirm password"
                      inputClass="PassmainInput "
                      onChange={(e) =>
                        setFormData({ ...formData, confirmPassword: e.target.value })
                      }
                    />
                  </Col>
                </Row>
              </Container>

              <div className='mt-5 pb-5 user-save-password '>
                <button className='user-action-button2' onClick={HandleChangePass}>Change Password</button>
              </div>
            </div>

          </div>
        </div>
        <div className="container User-dashboard-email-box mt-3">
          <div className="userAcc-Inner-container d-flex justify-content-between align-items-center">
            <div className="">
              <p className='user-account-text1'>My Session</p>

              <div className="d-flex gap-4" style={{ cursor: 'pointer' }} onClick={() => showAlert('Error', 'error', 'Please fill all fields')}>
                <UserLogoutIcon />
                <p className='userAccountparagraph2'>Log out from this device</p>
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
    </UserDashboardLayout >

    </div >
  )
}
