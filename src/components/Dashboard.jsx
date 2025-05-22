import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-fluid">

      <div className="row g-0 mt-2">

        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          
          <div className="balance-item1 p-3 m-2 d-flex flex-column align-items-center rounded w-100 shadow">
            <h1>Balance</h1>
            <h2>&#8377; 19000</h2>
          </div>

        </div>

        <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
          
          <div className="balance-item2 p-3 m-2 d-flex flex-column align-items-center rounded  w-100 shadow">
            <h1>Incomes</h1>
            <h2>&#8377; 20000</h2>
          </div>

        </div>
        
        <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
          
          <div className="balance-item3 p-3 m-2 d-flex flex-column align-items-center rounded  w-100 shadow">
            <h1>Expenses</h1>
            <h2>&#8377; 1000</h2>
          </div>

        </div>

      </div>

      <div className="row my-2">

        <div className="col-12 col-md-6">

          <div className="p-3 w-100 inexpanel rounded ">
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
                <div className="amount-income">+ &#8377; 2000</div>
              </div>

              {/* <div className="inexItem">
                <div className="display-list">
                  <span>🏨</span>
                  <h4>Hospital Income</h4>
                </div>
                <div className="amount-income">+ &#8377; 1000</div>
              </div> */}

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
    
              

            </div>
            <Link to='incomes' className="seeMore">See More</Link>
          </div>

        </div>

        <div className="col-12 col-md-6 mt-3 mt-md-0">

          <div className="p-3 w-100 inexpanel rounded ">
            <div className="d-flex justify-content-between align-items-center px-2">
              <h3>Expenses :</h3>
              <h5>Today</h5>
            </div>
            <div className="inexList">

              {/* <div className="inexItem">
                <div className="display-list">
                  <span>🛵</span>
                  <h4>Bike Petrol</h4>
                </div>
                <div className="amount-expence">- &#8377; 200</div>
              </div> */}
              
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
                  <span>🍕</span>
                  <div className="date-name">
                    <div className="name">Pizza</div>
                    <div className="date">22/06/2025</div>
                  </div>
                </div>
                <div className="amount-expence">- &#8377; 200</div>
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
            <Link to='expences' className="seeMore">See More</Link>

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Dashboard