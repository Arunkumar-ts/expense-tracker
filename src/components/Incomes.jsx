import { RiDeleteBin6Line } from "react-icons/ri";
import { MdMovieEdit } from "react-icons/md";

const Incomes = () => {

  return (
    <div className="container-fluid">

      <div className="row mt-3">

        <div className="col-12 col-md-5">
          <div className="addIncome w-100 rounded shadow ">
          <h3>Add New Income</h3>
            <div className="addInput">
              <label>Icon</label>
              <input type="text" placeholder="💸, 🏘 etc.." />
            </div>
            <div className="addInput">
              <label>Category</label>
              <input type="text" placeholder="Salary, etc.." required/>
            </div>
            <div className="addInput">
              <label>Amount</label>
              <input type="text" placeholder="&#8377; 1000" required />
            </div>
            <div className="addInput">
              <label>Date</label>
              <input type="date" required />
            </div>
            <div className="addInput-btn">
              <button>Add Income</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md">
          <div className="p-3 w-100 inexpanel rounded  mt-4 mt-md-0">

            <div className="d-flex justify-content-between align-items-center px-2">
              <h3>Incomes :</h3>
              <h5>Today</h5>
            </div>

            <div className="inexList">

              <div className="inexItem">
                <div className="display-list">
                  <span>💸</span>
                  <div className="date-name">
                    <div className="name">Salary</div>
                    <div className="date">22/06/2025</div>
                  </div>
                </div>
                <div className="amount-income">
                  <div >+ &#8377; 20000</div>
                  <div>
                    <button className="mx-2 list-btn edit"><MdMovieEdit/></button>
                    <button className="mx-2 list-btn delete"><RiDeleteBin6Line/></button>
                  </div>
                </div>
              </div>

              <div className="inexItem">
                <div className="display-list">
                  <span>💸</span>
                  <div className="date-name">
                    <div className="name">Salary</div>
                    <div className="date">22/06/2025</div>
                  </div>
                </div>
                <div className="amount-income">
                  <div >+ &#8377; 2000</div>
                  <div>
                    <button className="mx-2 list-btn edit"><MdMovieEdit/></button>
                    <button className="mx-2 list-btn delete"><RiDeleteBin6Line/></button>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Incomes