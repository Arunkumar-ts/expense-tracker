import { RiDeleteBin6Line } from "react-icons/ri";
import { MdMovieEdit } from "react-icons/md";

const Settings = () => {
  return (
      <div className="container-fluid">
    
        <div className="row mt-3">
  
          <div className="col-12 col-md-5">
            <div className="addIncome w-100 rounded shadow ">
            <h3>Profile</h3>
              <div className="addInput">
                <label>Profile Picture</label>
                <input type="text"  required />
              </div>
              <div className="addInput">
                <label>User Name</label>
                <input type="text"  required />
              </div>
              <div className="addInput">
                <label>Email</label>
                <input type="email"  required />
              </div>
              <div className="addInput">
                <label>Password</label>
                <input type="text" required />
              </div>
              <div className="addInput-btn">
                <button>Submit</button>
              </div>
            </div>
          </div>
  
          <div className="col-12 col-md">
            <div className="p-3 w-100 inexpanel rounded  mt-4 mt-md-0">
  
              <h3>History :</h3>
  
              <div className="inexList">
  
                <div className="inexItem">
                  <div className="display-list">
                    <span>💸</span>
                    <div className="date-name">
                      <div className="name">Salary</div>
                      <div className="date">22/06/2025</div>
                    </div>
                  </div>
                  <div className="amount-income">+ &#8377; 20000</div>
                </div>
  

                <div className="inexItem">
                  <div className="display-list">
                    <span>🛵</span>
                    <div className="date-name">
                      <div className="name">Bike Petrol</div>
                      <div className="date">22/06/2025</div>
                    </div>
                  </div>
                  <div className="amount-expence">- &#8377; 200</div>
                </div>

    
                <div className="inexItem">
                  <div className="display-list">
                    <span>🏨</span>
                    <div className="date-name">
                      <div className="name">Hospital Income</div>
                      <div className="date">22/06/2025</div>
                    </div>
                  </div>
                  <div className="amount-income">+ &#8377; 1000</div>
                </div>
                
                <div className="inexItem">
                  <div className="display-list">
                    <span>🍕</span>
                    <div className="date-name">
                      <div className="name">Pizza</div>
                      <div className="date">22/06/2025</div>
                    </div>
                  </div>
                  <div className="amount-expence">- &#8377; 200</div>
                </div>

              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </div>
  )
}

export default Settings