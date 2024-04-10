'use client'
import Header from "./components/Header"
import HomePage from "./pages/Home"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Home = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" Component={HomePage}/>
            </Routes>
        </Router>
    )
}

export default Home