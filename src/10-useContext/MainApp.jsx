import { Link, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"
import { UserPorvider } from "./context/userPorvider"

export const MainApp = () => {
  {/* //? para configurar nuestra ruttas con reactRouterDom
  //?debemos de crear otro higger component llamado routes
  //? dentro de ellas iran las rutas a las cuales daremos 
  //? un path(ruta) y un elemento(componente o pantalla) */}

  return (
    //? MUCHO OJO debemos de llamar nuestro provider 
    //? a una parte donde puedan los componenets hijos acceder a la informacion
    //? de manera global 
    <UserPorvider>
      <h1>MainApp</h1>
      <NavBar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        {/* //? en caso de no encontrar la ruta deseada podemos hacer 2 cosas */}
        {/* //? podemos redireccionar al componente que deseemos */}
        {/* //? <Route path="/*" element={<LoginPage />}/> */}
        {/* //? o crear un componente de reactRouterDom para llevarlo a un path especifico */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserPorvider>
  )
}
