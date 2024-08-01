import { Badge } from "@mui/material"; // IMPORTA EL COMPONENTE Badge DESDE @mui/material para la interfaz lo que se muestra 
import { ShoppingCart } from "@mui/icons-material"; // IMPORTA EL ICONO ShoppingCart DESDE @mui/icons-material
import { NavLink } from "react-router-dom"; // IMPORTA NavLink DESDE react-router-dom PARA NAVEGACIÓN
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";



export const NavBar = () => {
  const { listaCompras} = useContext(CarritoContext)
  return (

    // AQUI ABAJO ESTA TODO LO DEL BOOTSTRAP 
    // NAVLINK ES UN COMPONENTE DE REACT PARA NAVEGAR EN UNA PAGINA POR MEDIO DE UN LINK
    // AQUI EN REACT PARA DAR ESTILO SE UTILIZA CLASSNAME ES DEL CSS
    // TO='/' ES QUIEN DEFINE LA RUTA PRICIPAL
    //className="navbar-brand": Aplica la clase de Bootstrap para el estilo del logotipo o nombre de la marca 

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      {/* ELEMENTO nav PARA DEFINIR LA BARRA DE NAVEGACIÓN CON CLASES CSS PARA ESTILOS Y EXPANSIÓN */}
      
      <div className="container-fluid">
        {/* CONTENEDOR FLUIDO PARA ALINEAR EL CONTENIDO DENTRO DE LA BARRA DE NAVEGACIÓN */}

        <NavLink to='/' className="navbar-brand">Carrito</NavLink>
        {/* ENLACE DE NAVEGACIÓN QUE REDIRIGE A LA PÁGINA PRINCIPAL ('/') CON CLASE CSS navbar-brand */}

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* BOTÓN PARA COLAPSAR Y EXPANDIR EL CONTENIDO DE LA BARRA DE NAVEGACIÓN EN DISPOSITIVOS PEQUEÑOS */}
          <span className="navbar-toggler-icon"></span>
          {/* ICONO DENTRO DEL BOTÓN TOGGLER */}
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* CONTENEDOR COLAPSABLE PARA LOS ELEMENTOS DE NAVEGACIÓN, IDENTIFICADO POR EL ID navbarSupportedContent */}
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* LISTA DE ELEMENTOS DE NAVEGACIÓN CON CLASES CSS PARA MÁRGENES Y ESTILOS */}
            
            <li className="nav-item">
              {/* ELEMENTO DE LA LISTA DE NAVEGACIÓN */}
              <NavLink to='/' className="nav-link active">Compras</NavLink>
              {/* ENLACE DE NAVEGACIÓN QUE REDIRIGE A LA PÁGINA PRINCIPAL ('/') CON CLASE CSS nav-link Y active */}
            </li>
          </ul>
          
          
          <NavLink to="/carrito" className="nav-link">
            {/* ENLACE DE NAVEGACIÓN QUE REDIRIGE A LA PÁGINA DEL CARRITO ('/carrito') CON CLASE CSS nav-link */}
            <Badge badgeContent={listaCompras.length} color="secondary">
              {/* COMPONENTE Badge QUE MUESTRA UN CONTADOR (badgeContent) DE 4 CON COLOR secondary */}
              <ShoppingCart color="action" />
              {/* ICONO ShoppingCart DENTRO DEL Badge CON COLOR action */}
            </Badge>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
