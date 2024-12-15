import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    //? una etiqueta link es lo mismo que una etiqueta a pero
    //? la ventaja es que no recarga la pagina no hace el refresh
    //?al fianl esto sigue esienfo una etiqueta a 
    //? <Link to='/'>Home</Link>
    //? <Link to='/login'>Login</Link>
    //?  <Link to='/about'>About</Link>
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">UseContext</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* //? NavLink  es un componente que tiene ciertas 
                                pro//? piedades que nos va a ayudar en este caso a dar estilos*/}
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} `} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/login">Login</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
