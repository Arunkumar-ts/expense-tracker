import { useNavigate } from 'react-router-dom';     
import { MdLogin } from "react-icons/md";  
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import { MdHome } from "react-icons/md";
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate(); 

    let [showEye, setShowEye] = useState(false);
    const handleEye = ()=>{
        setShowEye(!showEye);
    }

  return (
    <>
    <div className='firstpage-img'>
        <header>
            <div className="container-fluid ">
                <div className="row headerRow shadow">
                    <div className="col d-flex justify-content-between align-items-center px-2 py-3">
                        <h2 className="ms-2">Expense Tracker</h2>
                        <div>
                            <button className="auth-btn" onClick={() => navigate('/')}> <span className='d-flex align-items-center '><MdHome/> Home</span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main className='login-main mt-5'>
            <div className='login-form shadow'>
                <h1 className='text-center'>Login</h1>
                <div>
                    <label >Email</label>
                    <input type="email" placeholder='tsarunkumar2005@gmail.com' />
                </div>
                <div>
                    <label >Password</label>
                    <input type={showEye ? "text" : "password" } placeholder='arun_pass'/>
                    {showEye ? <RxEyeOpen className='h4 eye' onClick={handleEye}/> : <GoEyeClosed className='h4 eye' onClick={handleEye}/>}
                </div>
                <div>
                    <button  onClick={() => navigate('/home')}><MdLogin/> Login</button>
                </div>
                <div>
                    <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign up for Expense Tracker</span> </p>
                </div>
            </div>
        </main>
    </div>
    </>
  )
}

export default Login