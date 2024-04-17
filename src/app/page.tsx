'use client'
import Account from "./pages/Account"
import HomePage from "./pages/Home"
import SignUp from "./pages/SignUp"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/Reset.css"

const Home = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" Component={SignUp}/>
                <Route path="/Account" Component={Account}/>
                <Route path="/SignUp" Component={SignUp}/>
            </Routes>
        </Router>
    )
}

export default Home