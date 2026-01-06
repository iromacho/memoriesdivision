import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const productos = [
  {
    id: 1,
    nombre: 'Chaqueta oversize',
    precio: '59,95 €',
    imagen: 'https://images.unsplash.com/photo-1520975916090-3105956dac38',
    descripcion: 'Chaqueta oversize de diseño contemporáneo y líneas limpias.'
  },
  {
    id: 2,
    nombre: 'Camisa blanca algodón',
    precio: '29,95 €',
    imagen: 'https://images.unsplash.com/photo-1622445272461-c6580cab8755',
    descripcion: 'Camisa blanca de algodón orgánico, corte recto.'
  },
  {
    id: 3,
    nombre: 'Pantalón sastre negro',
    precio: '39,95 €',
    imagen: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
    descripcion: 'Pantalón sastre con caída elegante.'
  },
  {
    id: 4,
    nombre: 'Abrigo largo lana',
    precio: '89,95 €',
    imagen: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
    descripcion: 'Abrigo largo de lana con diseño atemporal.'
  }
]

const tallas = ['XS', 'S', 'M', 'L', 'XL']

const Producto = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const producto = productos.find(p => p.id === Number(id))
  const [talla, setTalla] = useState(null)
  const [saliendo, setSaliendo] = useState(false)

  if (!producto) return null

  const volver = () => {
    setSaliendo(true)
    setTimeout(() => {
      navigate('/inicio')
    }, 300)
  }

  return (
    <motion.div
      className="w-screen h-screen bg-white text-black pt-24 px-10"
      initial={{ opacity: 0, y: 20 }}
      animate={saliendo ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >

      {/* VOLVER */}
      <button
        onClick={volver}
        className="absolute top-20 left-10 text-base font-medium 
          text-black/70 hover:text-black transition"
      >
        ← Volver a la colección
      </button>

      <div className="max-w-6xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* IMAGEN */}
        <div className="flex justify-center">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="h-[65vh] w-auto object-cover rounded-sm"
          />
        </div>

        {/* INFO */}
        <div className="flex flex-col max-w-md">

          <h1 className="text-2xl font-light mb-3">
            {producto.nombre}
          </h1>

          <p className="text-base mb-6">
            {producto.precio}
          </p>

          <p className="text-sm text-black/60 mb-10 leading-relaxed">
            {producto.descripcion}
          </p>

          {/* TALLAS */}
          <div className="mb-10">
            <p className="text-sm mb-4">Talla</p>

            <div className="flex gap-3">
              {tallas.map(t => (
                <button
                  key={t}
                  onClick={() => setTalla(t)}
                  className={`w-10 h-10 text-sm border transition
                    ${
                      talla === t
                        ? 'border-black bg-black text-white'
                        : 'border-black/30 hover:border-black'
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* BOTÓN */}
          <button
            className="w-full py-4 border border-black text-sm tracking-wide
              hover:bg-black hover:text-white transition"
          >
            AÑADIR AL CARRITO
          </button>

        </div>
      </div>
    </motion.div>
  )
}

export default Producto