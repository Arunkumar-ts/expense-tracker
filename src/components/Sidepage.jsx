import { Link } from "react-router-dom";

const Sidepage = () => {
  
  return (
    <>
      <div className="d-flex justify-content-center flex-column w-100">
        <div className="d-flex justify-content-center">
          <span className="bg-white rounded-circle shadow">
            <img src="user-profile.png" alt="user profile" width={80} />
          </span> 
        </div>
        <div>
          <h3 className="text-center mt-2 text-white">Arun Kumar</h3>
        </div>

        <div className="mt-3 w-100">
          <Link to="/home">
            <div className="my-4 p-1 rounded side-btns" data-bs-dismiss= "offcanvas" >Dashboard</div>
          </Link>

          <Link to="/home/expenses">
            <div className="my-4 p-1 rounded side-btns" data-bs-dismiss= "offcanvas">Expenses</div>
          </Link>

          <Link to="/home/incomes">
            <div className="my-4 p-1 rounded side-btns" data-bs-dismiss= "offcanvas">Incomes</div>
          </Link>

          <div className="my-4 p-1 rounded side-btns" data-bs-dismiss= "offcanvas">Logout</div>
        </div>
      </div>

      <div className="w-100">
        <Link to="/home/settings">
          <div className="p-1 rounded side-btns" data-bs-dismiss= "offcanvas">Settings</div>
        </Link>
      </div>
    </>
  );
};

export default Sidepage;
