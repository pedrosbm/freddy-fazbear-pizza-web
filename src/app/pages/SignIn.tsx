import { use, useState, useEffect } from "react"
import { Cliente, LoginForm } from "../types"
import '../styles/form/Form.css'

import Header2 from "../components/Header2"
import Header from "../components/Header"

const SignIn = () => {
    const [form, setForm] = useState<LoginForm>()

    const [loginError, setLoginError] = useState<boolean>()

    const [cliente, setCliente] = useState<Cliente>()

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await fetch("http://localhost:5001/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        }).then(response => {
            if (!response.ok) {
                setLoginError(true)
                return "vefirique suas credenciais"
            }
            return response.json()
        }).then(json => {
            console.log(json)
        })

    }

    return (
        <>
            <Header />
            <section className="form">
                <h2>LOG INTO YOUR ACCOUNT</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <span>Email</span>
                        <div>
                            <input name="email" type="email" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="inputContainer">
                        <span>Password</span>
                        <div>
                            <input name="senha" type="password" onChange={handleChange} />
                        </div>
                    </div>
                    {/* Not found error */}
                    {loginError == true ? <p>Verifique as suas credenciais</p> : <></>}

                    <button className="submitButton"><img src="" alt="{img check}" />FINISH</button>

                </form>
            </section>
        </>
    )
}

export default SignIn