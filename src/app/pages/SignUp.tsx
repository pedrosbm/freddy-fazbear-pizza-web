import { use, useState } from "react"
import { json } from "stream/consumers"
import { SignUpForm } from "../types"
import { Link } from "react-router-dom"

import Header2 from "../components/Header2"

import '../styles/form/Form.css'

const SignUp = () => {
    const [form, setForm] = useState<SignUpForm>()

    const [confirm, setConfirm] = useState("")

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleConfirmationChange = (e: any) => {
        setConfirm(e.target.value)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (confirm == form?.senha) {
            await fetch("http://localhost:5001/user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            }).then(response => {
                if (response.ok) {
                    // Efetuar o login
                }
            })
        }
    }

    return (
        <>
            <Header2 />
            <section className="form">
                <h2>CREATE YOUR ACCOUNT</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <span>Full name</span>
                        <div>
                            <input name="nome" type="text" onChange={handleChange} />
                        </div>
                    </div>

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

                    <div className="inputContainer">
                        <span>Confirm password</span>
                        <div>
                            <input name="confirm" type="password" onChange={handleConfirmationChange} />
                        </div>
                    </div>

                    <Link to="/SignIn">
                        <p>Já tenho uma conta</p>
                    </Link>

                    <button className="submitButton"><img src="" alt="{img check}" />FINISH</button>

                </form>
            </section>
        </>
    )
}

export default SignUp