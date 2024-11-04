import { React, useState, useEffect } from "react";
import { LoggedInHeader } from '../../Layout/loggedinlayout/header/header'
import { SiteFooter } from '../../Layout/footer'
import UserDashboardSideBar from '../UserSideBar/Index'
import './index.css'
import SimpleSideBar from '../UserSideBar/SImpleSidebar';
export default function UserDashboardLayout(props) {
  const [sideBarClass, setSideBarClass] = useState("collapsed"); // Default to closed
  const [bodyClass, setBodyClass] = useState("expanded");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setSideBarClass("collapsed");
        setBodyClass("expanded");
      } else {
        setSideBarClass("");
        setBodyClass("");
      }
    };

    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <LoggedInHeader />
      <div className="User-Dashoard-page pt-5">
        <div className="container">
          <div className="d-flex">
            <UserDashboardSideBar sideClass={sideBarClass} />

            {/* <SimpleSideBar sideClass={sideBarClass} /> */}
            <div className={`userDash-Main-container ${bodyClass}`}>
            <SimpleSideBar />
             
             
              {props.children}
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
