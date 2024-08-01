import { useEffect, useState } from 'react'
import { ProductosContext } from './ProductosContext'

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([])
  const [error, setError] = useState(null) // Añadido para manejar errores

  // Función para obtener los productos desde la API
  const fetchProductos = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products'); // Realiza la solicitud GET a la API
      if (!response.ok) { // Verifica si la respuesta es correcta
        throw new Error('Network response was not ok')
      }
      const data = await response.json(); // Convierte la respuesta a formato JSON
      setProductos(data); // Actualiza el estado con los datos obtenidos
    } catch (error) {
      setError(error.message); // Maneja errores y actualiza el estado de error
      console.error('Error fetching products:', error)
    }
  }

  // useEffect para ejecutar la función fetchProductos solo una vez después de montar el componente
  useEffect(() => {
    fetchProductos();
  }, [])

  return (
    <ProductosContext.Provider value={{ productos, error }}>
      {children}
    </ProductosContext.Provider>
  )
}
