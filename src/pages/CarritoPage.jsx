import { useContext, useRef } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import html2pdf from 'html2pdf.js';

export const CarritoPage = () => {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext);
  const contentRef = useRef();

  const calcularTotal = () => {
    // Asegúrate de que todos los valores sean números válidos
    return listaCompras
      .reduce((total, item) => total + (Number(item.price) || 0) * (Number(item.cantidad) || 1), 0)
      .toFixed(2);
  }

  const handleImpresion = () => {
    const element = contentRef.current;
    const opt = {
      margin:       0.5,
      filename:     'carrito.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  }

  return (
    <>
      <div ref={contentRef}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
          {listaCompras.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${Number(item.price).toFixed(2)}</td> {/* Asegúrate de que el precio siempre se muestre correctamente */}
              <td>
                <button 
                  className="btn btn-outline-primary"
                  onClick={() => disminuirCantidad(item.id)}>-</button>
                
                <button className='btn btn-primary'>{item.cantidad || 1}</button>
                
                <button
                  className='btn btn-outline-primary'
                  onClick={() => aumentarCantidad(item.id)}>+</button>
              </td>
              <td>
                <button 
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}
                >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <th><b>Total:</b></th>
              <td></td>
              <td></td>
              <td>${calcularTotal()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='d-grid gap-2'>
        <button 
        className='btn btn-primary'
        onClick={handleImpresion}
        >COMPRAR</button>
      </div>
    </>
  )
}
