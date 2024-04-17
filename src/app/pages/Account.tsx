import Header from "../components/Header"

import { useState, useEffect } from "react"


const Account = ()=>{
    
    useEffect(() => {
        console.log("Teste")
    }, [])

    return(
        <>
            <Header/>

        </>
    )
}

export default Account