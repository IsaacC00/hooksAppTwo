import { useForm } from "../hooks/useForm"

export const FormHook = () => {

    const {onInputChange,onResetForm,username, email,password} = useForm({
        username:'',
        email:'',
        password:'',
    });
    
    //hemos utilizado spread en nuestro 
    // customhook para no hacer esto
    // const {username, email,password} = formState

    return (
        <>
            <h2>Custom Hook Form </h2>
            <input
                className="mt-2 form-label"
                type="text"
                name="username"
                placeholder="Usuario"
                onChange={onInputChange}
                value={username}

            />
            <br />
            <input
                className="mt-2 form-label"
                type="text"
                name="email"
                placeholder="email"
                onChange={onInputChange}
                value={email}

            />
            <br />
            <input
                className="mt-2 form-label"
                type="password"
                name="password"
                placeholder="***********"
                onChange={onInputChange}
                value={password}

            />
            <br />

            <button onClick={onResetForm} className="btn btn-primary">Borrar</button>
        </> 
    )
}
