import { useState } from "react"
import Header2 from "../components/Header2"


const SignUp = () => {
    const [form, setForm] = useState({
        "nome": "",
        "email": "",
        "senha": ""
    })

    const handleChange = (e: any) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = () => {
        
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
                            <input name="confirmarSenha" type="password" />
                        </div>
                    </div>

                    <button className="submitButton"><img src="" alt="{img check}" />FINISH</button>

                </form>
            </section>
        </>
    )
}

export default SignUp