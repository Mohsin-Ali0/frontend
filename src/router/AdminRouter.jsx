// src/router/AdminRouter.js
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../screens/admin/Dashboard";

const AdminLogin = lazy(() => import("../screens/admin/Login"));

const AdminRouter = () => {
  return (
    <div id="admin-wrapper">
      <Suspense fallback={<div>Loading Admin Panel...</div>}>
        <Routes>
          <Route path="login" element={<AdminLogin />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<div>Profile Page</div>} />
            <Route path="settings" element={<div>Settings Page</div>} />
            <Route path="reports" element={<div>Reports Page</div>} />
            {/* Add more nested routes as needed */}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export { AdminRouter };

// import React, { useEffect, lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
// import { BlankPage } from "../admin/screens/Blank/BlankPage";
// const AdminLogin = lazy(() => import("../admin/screens/Login"));

// const loadScript = (src) => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.async = true;
//     script.onload = () => {
//       console.log(`Loaded script: ${src}`);
//       resolve();
//     };
//     script.onerror = () => {
//       console.error(`Failed to load script: ${src}`);
//       reject(new Error(`Failed to load script: ${src}`));
//     };
//     document.body.appendChild(script);
//   });
// };

// const loadStyle = (href) => {
//   return new Promise((resolve, reject) => {
//     const link = document.createElement("link");
//     link.href = href;
//     link.rel = "stylesheet";
//     link.type = "text/css";
//     link.onload = () => {
//       console.log(`Loaded CSS: ${href}`);
//       resolve();
//     };
//     link.onerror = () => {
//       console.error(`Failed to load CSS: ${href}`);
//       reject(new Error(`Failed to load CSS: ${href}`));
//     };
//     document.head.appendChild(link);
//   });
// };

// const AdminRouter = () => {
//   useEffect( () => {
//     const loadResources = async () => {
//       const styles = [
//         "/admin/assets/css/skins/default.css",
//         "/admin/assets/css/theme.css",
//         "/admin/assets/vendor/animate/animate.compat.css",
//         "/admin/assets/vendor/font-awesome/css/all.min.css",
//         "/admin/assets/vendor/boxicons/css/boxicons.min.css",
//         "/admin/assets/vendor/magnific-popup/magnific-popup.css",
//         "/admin/assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css",
//       ];

//       const scripts = [
//         "/admin/assets/vendor/jquery/jquery.js",
//         "/admin/assets/vendor/jquery-browser-mobile/jquery.browser.mobile.js",
//         "/admin/assets/vendor/popper/umd/popper.min.js",
//         "/admin/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
//         "/admin/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js",
//         "/admin/assets/vendor/common/common.js",
//         "/admin/assets/vendor/nanoscroller/nanoscroller.js",
//         "/admin/assets/vendor/magnific-popup/jquery.magnific-popup.js",
//         "/admin/assets/vendor/jquery-placeholder/jquery.placeholder.js",
//         "/admin/assets/vendor/modernizr/modernizr.js",
//         "/admin/assets/js/theme.js",
//         "/admin/assets/js/custom.js",
//         "/admin/assets/js/theme.init.js",
//       ];

//       try {
//         await Promise.all(styles.map(loadStyle));
//         await Promise.all(scripts.map(loadScript));
//       } catch (error) {
//         console.error("Error loading resources", error);
//       }
//     };

//     loadResources();

//     return () => {
//       const removeLinks = [
//         "/admin/assets/css/skins/default.css",
//         "/admin/assets/css/theme.css",
//         "/admin/assets/vendor/animate/animate.compat.css",
//         "/admin/assets/vendor/font-awesome/css/all.min.css",
//         "/admin/assets/vendor/boxicons/css/boxicons.min.css",
//         "/admin/assets/vendor/magnific-popup/magnific-popup.css",
//         "/admin/assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css",
//       ];

//       const removeScripts = [
//         "/admin/assets/vendor/jquery/jquery.js",
//         "/admin/assets/vendor/jquery-browser-mobile/jquery.browser.mobile.js",
//         "/admin/assets/vendor/popper/umd/popper.min.js",
//         "/admin/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
//         "/admin/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js",
//         "/admin/assets/vendor/common/common.js",
//         "/admin/assets/vendor/nanoscroller/nanoscroller.js",
//         "/admin/assets/vendor/magnific-popup/jquery.magnific-popup.js",
//         "/admin/assets/vendor/jquery-placeholder/jquery.placeholder.js",
//         "/admin/assets/vendor/modernizr/modernizr.js",
//         "/admin/assets/js/theme.js",
//         "/admin/assets/js/custom.js",
//         "/admin/assets/js/theme.init.js",
//       ];

//       removeLinks.forEach((href) => {
//         const link = document.querySelector(`link[href="${href}"]`);
//         if (link) {
//           document.head.removeChild(link);
//         }
//       });

//       removeScripts.forEach((src) => {
//         const script = document.querySelector(`script[src="${src}"]`);
//         if (script) {
//           document.body.removeChild(script);
//         }
//       });
//     };
//   }, []);

//   return (
//     <div id="admin-wrapper">
//       <Suspense fallback={<div>Loading Admin Panel...</div>}>
//         <Routes>
//           <Route path="login" element={<AdminLogin />} />
//           <Route path="dashboard" element={<BlankPage />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };

// export { AdminRouter };
