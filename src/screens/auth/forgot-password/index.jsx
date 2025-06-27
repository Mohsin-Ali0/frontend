import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import "../login.css";
import { Form, Image, Modal, Button } from "react-bootstrap";
import { AuthLayout } from "../../../components/Layout/authLayout";
import SiteButton from "../../../components/Button/button";
import usePageTitle from "../../../hooks/usePageTitle";
import { GoogleIcon } from "../../../assets/images";
import CustomInput from "../../../components/CustomInput";
import OTPInput from "react-otp-input";
import Swal from "sweetalert2";
import FadeIn from "../../../components/FadeIn/FadeIn";

const ForgotPassword = () => {
    usePageTitle("Forgot Password");
    const [formData, setFormData] = useState({});
    const [load, setLoad] = useState(false);
    const [ErrorData, setErrorData] = useState({});
    const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP, Step 3: Password Reset
    const [FormType, setFormType] = useState("Verify Email");
    const navigate = useNavigate();

    const handleForgetPassword = async (e) => {
        e.preventDefault();
        setLoad(true);
        setErrorData({ ...ErrorData, type: false });

        if (step === 1) {
            // Handle email submission
            if (!formData.email) {
                setErrorData({
                    ...ErrorData,
                    type: true,
                    message: "Please enter your email",
                });
                setLoad(false);
                return;
            }
            try {
                await axios.post("/auth/verify-mail", { email: formData.email });
                setStep(2);
                setFormType("Verify OTP");
            } catch (err) {
                setErrorData({
                    ...ErrorData,
                    type: true,
                    message: err.response.data.message,
                });
            }
        } else if (step === 2) {
            // Handle OTP submission
            if (!formData.otp) {
                setErrorData({
                    ...ErrorData,
                    type: true,
                    message: "Please enter the OTP sent to your email",
                });
                setLoad(false);
                return;
            }
            try {
                await axios.post("/auth/verify-otp", { email: formData.email, otp: formData.otp });
                setStep(3);
                setFormType("Reset Password");
            } catch (err) {
                setErrorData({
                    ...ErrorData,
                    type: true,
                    message: err.response.data.message,
                });
            }
        } else if (step === 3) {
            // Handle password reset
            if (!formData.password || !formData.confirmPassword) {
                setErrorData({
                    ...ErrorData,
                    type: true,
                    message: "Please enter your new password and confirm it",
                });
                setLoad(false);
                return;
            }
            if (formData.password !== formData.confirmPassword) {
                setErrorData({
                    ...ErrorData,
                    type: true,
                    message: "Passwords do not match",
                });
                setLoad(false);
                return;
            }
            try {
                await axios.post("/auth/reset-password", { email: formData.email, password: formData.password, confirmPassword: formData.confirmPassword });
                Swal.fire({
                    title: "Password Updated",
                    text: "Please login to continue",
                    icon: "success",
                    confirmButtonText: "OK",
                }).then((result) => {
                    if (result.isConfirmed || result.isDismissed) {
                        navigate("/login");
                    }
                });
            } catch (err) {
                setErrorData({
                    ...ErrorData,
                    type: true,
                    message: err.response.data.message,
                });
            }
        }

        setLoad(false);
    };



    return (
        <>
            <AuthLayout   >
                <div className="center-content ">
                    <h3 className="auth-title mob-resp">{FormType}</h3>
                    <div className="breakcontainer">
                        <hr className="hrbar mob-resp" />
                        <span className="mob-resp">****</span>
                        <hr className="hrbar  mob-resp" />
                    </div>
                    {ErrorData.type ? (
                        <div className="alert alert-danger" role="alert">
                            <strong>Oops! </strong>
                            {ErrorData.message}
                        </div>
                    ) : null}
                    <Form onSubmit={handleForgetPassword} style={{ width: '100%' }}>
                        {step === 1 && (
                            <>
                                <FadeIn>
                                    <CustomInput
                                        label="Email"
                                        labelClass="mainLabel bold mob-resp"
                                        type="email"
                                        id="email"
                                        placeholder="Enter your Email Address"
                                        inputClass="mainInput"
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                    />
                                </FadeIn>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <FadeIn>


                                    <label className="mainLabel bold mob-resp">Enter OTP</label>
                                    <OTPInput
                                        value={formData.otp}
                                        onChange={(otp) =>
                                            setFormData({ ...formData, otp })
                                        }
                                        numInputs={4}
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => <input {...props} />}
                                        inputStyle={{
                                            width: "70px",
                                            height: "70px",
                                            margin: "5px",
                                            borderRadius: "4px",
                                            border: "1px solid #ced4da",
                                            fontSize: "16px",
                                            textAlign: "center",
                                        }}
                                        containerStyle={{
                                            display: "flex",
                                            justifyContent: "center",
                                            flexWrap: "wrap",
                                        }}
                                    />

                                </FadeIn>

                            </>
                        )}
                        {step === 3 && (
                            <>
                                <FadeIn>

                                    <CustomInput
                                        label="New Password"
                                        labelClass="mainLabel bold mob-resp"
                                        type="password"
                                        id="password"
                                        placeholder="Enter your new password"
                                        inputClass="mainInput"
                                        onChange={(e) =>
                                            setFormData({ ...formData, password: e.target.value })
                                        }
                                    />
                                    <CustomInput
                                        label="Confirm New Password"
                                        labelClass="mainLabel bold mob-resp"
                                        type="password"
                                        id="confirmPassword"
                                        placeholder="Confirm your new password"
                                        inputClass="mainInput"
                                        onChange={(e) =>
                                            setFormData({ ...formData, confirmPassword: e.target.value })
                                        }
                                    />
                                </FadeIn>
                            </>
                        )}
                        <div className="mt-4 text-center">
                            <SiteButton
                                type="submit"
                                className="site-btn"
                                style={{ width: "100%" }}
                                load={load}
                            >
                                {FormType}
                            </SiteButton>
                        </div>
                    </Form>
                </div>

                {/* {showModal && showAlert()} */}
            </AuthLayout>
        </>
    );
};

export default ForgotPassword;