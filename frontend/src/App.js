import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import AdminPanel from "./Pages/admin/AdminPanel.jsx";
import AuthPanel from "./Pages/auth/AuthPanel.jsx";
import ThemePanel from "./Pages/theme/default/ThemePanel.jsx";

import Page404 from "./components/general/Page404.jsx";


function App() {

  const navigate = useNavigate();


  const location = useLocation();
  const { hash, pathname, search } = location;

  const adminRoutes = ["/admin", "/admin/ecommerce", "/admin/orders", "/admin/calendar", "/admin/employees", "/admin/stacked", "/admin/pyramid", "/admin/customers", "/admin/kanban", "/admin/line", "/admin/area", "/admin/bar", "/admin/pie", "/admin/financial", "/admin/color-picker", "/admin/color-mapping", "/admin/editor",];


  const authRoutes = ["/login", "/register", "/forgot-password", "/password-reset/:token"];


  const themeRoutes = ["/"];

  // Admin Panel
  // if (adminRoutes.includes(pathname)) {

  //   if (user && user.role == "admin")
  //     return (
  //       <AdminPanel />
  //     );

  //   else if (user && user.role !== "admin" || !user) {
  //     return (<Page404 />)
  //     // <Page404 /> !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //     //  hide login,register... page !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //   }
  // }
  // // Admin Panel


  // // Auth Panel
  // else if (authRoutes.includes(pathname)) {
  //   if (user) {
  //     navigate(-1);
  //     //  hide login,register... page !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //   }
  //   else {
  //     return (
  //       <AuthPanel />
  //     )
  //   }
  // }
  // // Auth Panel

  // // Theme Panel 
  // else if (themeRoutes.includes(pathname)) {
    return (
      <ThemePanel />
    )
  // }
  // // Theme Panel 

  // // Errors
  // else {
  //   return (
  //     <Page404 />
  //   )
  // }
  // // Errors

}

export default App;
