import React from 'react'

const productos = [
  {
    id: 1,
    nombre: 'Chaqueta oversize',
    precio: '59,95 €',
    imagen: 'https://images.unsplash.com/photo-1520975916090-3105956dac38'
  },
  {
    id: 2,
    nombre: 'Camisa blanca algodón',
    precio: '29,95 €',
    imagen: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47'
  },
  {
    id: 3,
    nombre: 'Pantalón sastre negro',
    precio: '39,95 €',
    imagen: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c'
  },
  {
    id: 4,
    nombre: 'Abrigo largo lana',
    precio: '89,95 €',
    imagen: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
  }
]

const Inicio = () => {
  return (
    <div className="w-screen min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="h-[70vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-6">
          NEW COLLECTION
        </h1>
        <p className="text-black/60 max-w-xl">
          Descubre prendas esenciales con un diseño atemporal.
        </p>
      </section>

      {/* GRID PRODUCTOS */}
      <section className="px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {productos.map(producto => (
            <div
              key={producto.id}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-sm uppercase tracking-wide">
                  {producto.nombre}
                </h3>
                <p className="text-sm text-black/60 mt-1">
                  {producto.precio}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  )
}

export default Inicio
