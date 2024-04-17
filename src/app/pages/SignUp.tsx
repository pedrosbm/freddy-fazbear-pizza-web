import { useState } from "react"
import Header2 from "../components/Header2"


const SignUp = () => {
    type Cliente = {
        "nome": string,
        "email": string,
        "senha": string
    }

    const [form, setForm] = useState<Cliente>()

    const handleChange = (e : any) =>{
        console.log(e.name.target)
    }

    const handleSubmit = () =>{

    }

    return(
        <>
            <Header2/>
            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <label htmlFor=""></label>
                        <div>
                            <input name="nome" type="text" onChange={handleChange} />
                        </div>
                    </div>

                    
                </form>
            </section>
        </>
    )
}

export default SignUp