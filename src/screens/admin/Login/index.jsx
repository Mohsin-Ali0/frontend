import React from "react";
// import '../../assets/css/bootstrap.css'; // Adjust paths as necessary
// import "../../assets/vendor/bootstrap/css/bootstrap.css"





// import Logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const AdminSignin = () => {
    navigate("/admin/dashboard");
    // console.log(Navigate, "pressed");
  };

  return (
    <section className="body-sign">
      <div className="center-sign">
        <a href="/" className="logo float-start">
          <img src="/admin/assets/img/logo.png" height="70" alt="Porto Admin" />
        </a>

        <div className="panel card-sign">
          <div className="card-title-sign mt-3 text-end">
            <h2 className="title text-uppercase font-weight-bold m-0">
              <i className="bx bx-user-circle me-1 text-6 position-relative top-5"></i>{" "}
              Sign In
            </h2>
          </div>
          <div className="card-body">
            {" "}
            {/* Change action to your post handling route */}
            <div className="form-group mb-3">
              <label>Username</label>
              <div className="input-group">
                <input
                  name="username"
                  type="text"
                  className="form-control form-control-lg"
                />
                <span className="input-group-text">
                  <i className="bx bx-user text-4"></i>
                </span>
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="clearfix">
                <label className="float-start">Password</label>
              </div>
              <div className="input-group">
                <input
                  name="pwd"
                  type="password"
                  className="form-control form-control-lg"
                />
                <span className="input-group-text">
                  <i className="bx bx-lock text-4"></i>
                </span>
              </div>
            </div>
            <div className="mb-1 text-center">
              <button
                className="btn btn-primary mt-2  btn-facebook "
                onClick={AdminSignin}
              >
                Sign In
              </button>
            </div>
            <p className="text-center"> </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdminLogin;
