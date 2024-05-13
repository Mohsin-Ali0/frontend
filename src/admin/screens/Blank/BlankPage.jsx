import React, { useEffect } from "react";
import AdminPanelHeader from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import MainContent from "../../components/MainContent/MainContent";
import RightSidebar from "../../components/RightSidebar/RightSidebar";

export const BlankPage = () => {
  // useEffect(() => {
  //   const loadScript = (src) => {
  //     return new Promise((resolve, reject) => {
  //       const script = document.createElement("script");
  //       script.src = src;
  //       script.async = true;
  //       script.onload = () => {
  //         console.log(`Script loaded: ${src}`);
  //         resolve();
  //       };
  //       script.onerror = () => {
  //         console.error(`Error loading script: ${src}`);
  //         reject(new Error(`Error loading script: ${src}`));
  //       };
  //       document.body.appendChild(script);
  //     });
  //   };

  //   const scripts = [
  //     "../admin/assets/vendor/jquery/jquery.js",
  //     "../admin/assets/vendor/modernizr/modernizr.js", // Load Modernizr first
  //     "../admin/assets/vendor/jquery-browser-mobile/jquery.browser.mobile.js",
  //     "../admin/assets/vendor/popper/umd/popper.min.js",
  //     "../admin/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
  //     "../admin/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js",
  //     "../admin/assets/vendor/common/common.js",
  //     "../admin/assets/vendor/nanoscroller/nanoscroller.js",
  //     "../admin/assets/vendor/magnific-popup/jquery.magnific-popup.js",
  //     "../admin/assets/vendor/jquery-placeholder/jquery.placeholder.js",
  //     "../admin/assets/js/theme.js",
  //     "../admin/assets/js/custom.js",
  //     "../admin/assets/js/theme.init.js",
  //   ];

  //   const loadAllScripts = async () => {
  //     for (const src of scripts) {
  //       try {
  //         await loadScript(src);
  //       } catch (error) {
  //         console.error(`Failed to load script: ${src}`, error);
  //       }
  //     }
  //   };

  //   loadAllScripts();

  //   return () => {
  //     scripts.forEach((src) => {
  //       const script = document.querySelector(`script[src="${src}"]`);
  //       if (script) {
  //         script.remove();
  //         console.log(`Removed script: ${src}`);
  //       }
  //     });
  //   };
  // }, []);

  return (
    <div className="body">
      <AdminPanelHeader />
      <div className="inner-wrapper">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
};
// export default BlankPage;
