import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Compraspage } from "./pages/Compraspage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductoProvider } from "./context/ProductoProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const CarritoApp = () => {
  return (
    <ProductoProvider>
      <CarritoProvider>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Compraspage />} />
            <Route path="/carrito" element={<CarritoPage />} />
            <Route path="/*" element={<Navigate to='/' />} />
          </Routes>
        </div>
      </CarritoProvider>
    </ProductoProvider>
  )
}
