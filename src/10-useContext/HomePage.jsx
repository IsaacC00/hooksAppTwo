import { useContext } from "react"
import { UserContext } from "./context/userContext"

export const HomePage = () => {

    const { user } = useContext(UserContext);

    return (
        <>
            <h1>
                HomePage
            </h1>
            <hr />
            <h1>Hola <small>{user?.name}
                </small>
            </h1>
            <pre
             aria-label='preTag'
             >
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}
