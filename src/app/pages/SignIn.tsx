import { use, useState, useEffect } from "react"
import Header2 from "../components/Header2"

import '../styles/form/Form.css'
import { LoginForm } from "../types"

const SignIn = () => {
    const [form, setForm] = useState<LoginForm>()

    const [loginError, setLoginError] = useState<boolean>()

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        }).then(response => {
            if (response.status == 404) {
                setLoginError(true)
            }
            return response.json()
        }).then(json => {
            // Armazenar id do usuário nos cookies

            // navegar pra conta
        })

    }

    return (
        <>
            <Header2 />
            <section className="form">
                <h2>CREATE YOUR ACCOUNT</h2>
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
                    {notFoundError == true ? <p>Verifique as suas credenciais</p> : <></>}

                    <button className="submitButton"><img src="" alt="{img check}" />FINISH</button>

                </form>
            </section>
        </>
    )
}

export default SignIn