import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"

const initialState = []

export const CarritoProvider = ({ children }) => {
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[COMPRA] Agregar Compra":
        return [...state, action.payload]
      case "[COMPRA] Aumentar Cantidad Compra":
        return state.map(compra =>
          compra.id === action.payload
            ? { ...compra, cantidad: (compra.cantidad || 1) + 1 }
            : compra
        )
      case "[COMPRA] Disminuir Cantidad Compra":
        return state.map(compra =>
          compra.id === action.payload
            ? { ...compra, cantidad: Math.max((compra.cantidad || 1) - 1, 1) }
            : compra
        )
      case "[COMPRA] Eliminar Compra":
        return state.filter(compra => compra.id !== action.payload)
      default:
        return state
    }
  }

  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    const action = {
      type: "[COMPRA] Agregar Compra",
      payload: compra,
    };
    dispatch(action)
  }

  const aumentarCantidad = (id) => {
    const action = {
      type: "[COMPRA] Aumentar Cantidad Compra",
      payload: id,
    };
    dispatch(action)
  }

  const disminuirCantidad = (id) => {
    const action = {
      type: "[COMPRA] Disminuir Cantidad Compra",
      payload: id,
    }
    dispatch(action)
  }

  const eliminarCompra = (id) => {
    const action = {
      type: "[COMPRA] Eliminar Compra",
      payload: id,
    };
    dispatch(action)
  }

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  )
}
