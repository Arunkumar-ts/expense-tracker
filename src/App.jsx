import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Expences from "./components/Expences";
import Incomes from "./components/Incomes";
import Settings from "./components/Settings";
import FirstHome from "./components/FirstHome";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FirstHome/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path="/home" element={<Home />}>
            <Route index element={<Dashboard/>}/>
            <Route path='incomes' element={<Incomes/>}/>
            <Route path='expenses' element={<Expences/>}/>
            <Route path='settings' element={<Settings/>}/>
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
