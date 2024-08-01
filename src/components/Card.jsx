import { useState } from "react";
import "../styles/card.css";

// Define un componente funcional llamado Card que recibe props.
export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar, handleAumentar, handleDisminuir }) => {
  const [added, setAdded] = useState(false);

  // Función para manejar el clic en el botón de agregar al carrito.
  const clickAgregar = () => {
    handleAgregar();  // Llama a la función handleAgregar pasada como prop.
    setAdded(true);   // Cambia el estado 'added' a true.
  };

  // Función para manejar el clic en el botón de quitar del carrito.
  const clickQuitar = () => {
    handleQuitar();  // Llama a la función handleQuitar pasada como prop.
    setAdded(false); // Cambia el estado 'added' a false.
  };

  return (
    <div className="tarjeta">
      {/* Contenedor principal del componente Card */}
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      {/* Imagen del producto */}
      
      <div className="tarjeta-contenido">
        {/* Contenido textual de la tarjeta */}
        <h3 className="tarjeta-titulo">{titulo}</h3>
        {/* Título del producto */}
        
        <p className="tarjeta-descripcion">{descripcion}</p>
        {/* Descripción del producto */}
        
        <p className="tarjeta-precio">${precio}</p>
        {/* Precio del producto */}
        
        {added ? (
          <>
            <button 
              type="button" 
              className="boton-quitar"
              onClick={clickQuitar}  // Usa la función clickQuitar.
            >
              Quitar del carrito
            </button>
            {/* Botón para quitar el producto del carrito */}
            {/* Opcionalmente, podrías agregar botones para aumentar/disminuir cantidad si tienes lógica para eso */}
          </>
        ) : (
          <button 
            type="button" 
            className="boton-agregar"
            onClick={clickAgregar}  // Usa la función clickAgregar.
          >
            Agregar al carrito
          </button>
          // Botón para agregar el producto al carrito
        )}
      </div>
    </div>
  );
};
