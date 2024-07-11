import React from 'react';
import './Productos.css';
import w300 from '../assets/images/panel300w.png'
import w500 from '../assets/images/panel500w.png'
import kitSolar from '../assets/images/kit-solar.png'
import bateria from '../assets/images/bateria.png'
const productosData = [
  {
    id: 1,
    nombre: 'Panel Solar 300W',
    descripcion: 'Panel solar monocristalino de alta eficiencia, ideal para aplicaciones residenciales y comerciales.',
    imagen: w300,
    precio: '$200',
    disponible: true
  },
  {
    id: 2,
    nombre: 'Panel Solar 500W',
    descripcion: 'Panel solar policristalino potente y duradero, adecuado para proyectos industriales y grandes instalaciones.',
    imagen: w500,
    precio: '$350',
    disponible: true
  },
  {
    id: 3,
    nombre: 'Kit Solar Residencial',
    descripcion: 'Kit completo para sistema solar residencial, incluye paneles, inversor y baterías.',
    imagen: kitSolar,
    precio: '$1500',
    disponible: true
  },
  {
    id: 4,
    nombre: 'Batería Solar 12V 200Ah',
    descripcion: 'Batería de ciclo profundo para almacenamiento de energía solar, larga vida útil y alto rendimiento.',
    imagen: bateria,
    precio: '$400',
    disponible: true
  }
];

const Productos = () => {
  return (
    <section className="productos">
      <div className="productos-container">
        {productosData.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="producto-info">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p className="precio">{producto.precio}</p>
              <button disabled={!producto.disponible}>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Productos;
