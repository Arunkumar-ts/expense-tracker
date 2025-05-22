import Sidepage from "./Sidepage"
import { FiAlignRight } from "react-icons/fi";
import { Outlet, Navigate } from "react-router-dom";

const Home = () => {
    
  return (
    <>
    <header>
      <div className="container-fluid ">
        <div className="row headerRow shadow">

          <div className="col d-flex justify-content-between align-items-center px-2 py-3">
            <h2 className="ms-3">Expense Tracker</h2>

            {/* offcanvas Sidebar btn */}
            <button className="btn btn-light d-flex d-block d-md-none offcanva-close-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo" style={{fontSize:'30px'}}>
              <FiAlignRight />
            </button> 

            {/* Offcanvas Sidebar */}
            <div className="offcanvas offcanvas-start w-75 offvancaheaderStyle" id="demo">
              <div className="offcanvas-header  headerRow border-bottom">
                <h1 className="offcanvas-title text-white">Expense Tracker</h1>
                <button type="button" className="btn-close h4 offcanva-close-btn" data-bs-dismiss="offcanvas"></button>
              </div>
              <div className="offcanvas-body sideOffcanva">
                <Sidepage/>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </header>
    <main>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-2 d-none d-md-block p-0 bg-light shadow">
              <div className="sideBar">
                  <div className="sideBar1">
                    <Sidepage/>
                  </div>
              </div>
          </div>
          <div className="col">
            <div className="main">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Home