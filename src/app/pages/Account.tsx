import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

import { useState, useEffect } from "react"


const Account = () => {
    const navigate = useNavigate()

    if (localStorage.getItem("logado") == "true") {
        return (
            <>
                <Header />
                <p>Conta</p>
            </>
        )
    } else  {
        navigate("/SignUp")
    }
}

export default Account