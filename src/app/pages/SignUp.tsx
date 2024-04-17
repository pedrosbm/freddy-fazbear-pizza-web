import { use, useState } from "react"
import Header2 from "../components/Header2"
import { json } from "stream/consumers"


const SignUp = () => {
    const [form, setForm] = useState({
        "nome": "",
        "email": "",
        "senha": "",
    })

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
        if (confirm == form.senha) {
            fetch("https://localhost:8080/user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
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

                    <button className="submitButton"><img src="" alt="{img check}" />FINISH</button>

                </form>
            </section>
        </>
    )
}

export default SignUp