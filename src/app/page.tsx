'use client'
import Account from "./pages/Account"
import HomePage from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/Reset.css"

const Page = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" Component={HomePage}/>
                <Route path="/SignIn" Component={SignIn}/>
                <Route path="/SignUp" Component={SignUp}/>
                <Route path="/Account" Component={Account}/>
            </Routes>
        </Router>
    )
}

export default Page