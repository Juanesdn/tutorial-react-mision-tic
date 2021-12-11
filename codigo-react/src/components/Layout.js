import React from "react";

import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Toolbar />
          {children}
        </div>
        {/* <!-- Footer --> */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2021</span>
            </div>
          </div>
        </footer>
        {/* <!-- End of Footer --> */}
      </div>
    </>
  );
};

export default Layout;
