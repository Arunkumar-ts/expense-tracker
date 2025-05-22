import { useNavigate } from 'react-router-dom';     
import { MdLogin } from "react-icons/md";  
import { FaRegUser } from "react-icons/fa6";

const FirstHome = () => {
    const navigate = useNavigate(); 

  return (
    <div className='firstpage-img'>
        <header>
            <div className="container-fluid ">
                <div className="row headerRow shadow">
                    <div className="col d-flex justify-content-between align-items-center px-2 py-3">
                        <h2 className="ms-2">Expense Tracker</h2>
                        <div>
                            <button className="auth-btn" onClick={() => navigate('/login')}><MdLogin/> Login</button>
                            <button className="auth-btn" onClick={() => navigate('/signup')}><FaRegUser/> SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main >
            <div className='text-center details-container'  >
               <h1 className='text-danger mt-3 '>Welcome to Expense Tracker</h1>
      
                <p className='h5'>
                    Managing your money shouldn't be hard — and with Expense Tracker, it isn't.
                    Whether you're a student trying to stick to a monthly budget, a freelancer juggling multiple income sources,
                    or someone simply trying to save more, Expense Tracker gives you the tools to understand where your money goes.
                </p>

                <p className='h5 d-none d-md-block'>
                    With our clean and easy-to-use dashboard, you can log your income and expenses in just a few clicks.
                    The system automatically calculates your total income, total spending, and remaining balance.
                    You can even categorize your transactions, track your spending habits over time, and stay on top of your financial goals.
                </p>

                <button onClick={() => navigate('/login')}  >
                    Get Started
                </button>

                <p className='h5 d-none d-md-block'>
                    We believe that financial awareness is the first step toward financial freedom.
                    That's why Expense Tracker is built to be fast, private, and free from clutter — so you can focus on what really matters: 
                    building a better financial future.
                </p>

                <p className='h5'>
                    Ready to take control of your finances? Create your account or log in now to get started.
                    Your wallet will thank you later.
                </p>
                <div>
                    <img src="bg-2.png" alt="expense tree image" width={300} />
                </div>
            </div>

        </main>
    </div>
  )
}

export default FirstHome