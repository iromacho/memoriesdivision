import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import DarkVeil from './DarkVeil'
import Inicio from './Inicio'

const App = () => {
  return (
    <Router>
      <div className="w-screen min-h-screen bg-black">

        {/* NAVBAR CRISTAL */}
        <header
          className="fixed top-4 left-1/2 -translate-x-1/2 
          w-[90%] max-w-5xl h-14 
          bg-white/10 backdrop-blur-xl 
          border border-white/20 rounded-full 
          z-50 flex items-center justify-between px-6 text-white"
        >
          <span className="font-semibold">Memories</span>

          <nav className="flex gap-6 text-sm">
            <Link to="/" className="hover:text-white/80">Home</Link>
            <Link to="/inicio" className="hover:text-white/80">Ropa</Link>
          </nav>
        </header>

        <Routes>

          {/* HOME — EXACTO TIPO REACT BITS */}
          <Route
            path="/"
            element={
              <div
                className="relative w-full overflow-hidden"
                style={{ height: 'calc(100vh - 4rem)' }} // sin scroll
              >

                {/* Fondo animado */}
                <div className="absolute inset-0">
                  <DarkVeil />
                </div>

                {/* CONTENIDO */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">

                  {/* Badge cristal */}
                  <div
                    className="mb-6 px-5 py-2 rounded-full 
                    bg-white/10 backdrop-blur-md 
                    border border-white/20 
                    text-sm flex items-center gap-2"
                  >
                    ✨ New Background
                  </div>

                  {/* Título */}
                  <h1 className="text-4xl md:text-6xl font-bold text-center max-w-3xl leading-tight">
                    Become emboldened by<br />
                    the flame of ambition
                  </h1>

                  {/* Botones */}
                  <div className="mt-10 flex gap-4">

                    <Link
                      to="/inicio"
                      className="px-8 py-3 rounded-full 
                      bg-white text-black font-medium 
                      hover:bg-gray-200 transition"
                    >
                      Get Started
                    </Link>

                    <button
                      className="px-8 py-3 rounded-full 
                      bg-white/10 backdrop-blur-md 
                      border border-white/20 
                      hover:bg-white/20 transition"
                    >
                      Learn More
                    </button>

                  </div>

                </div>
              </div>
            }
          />

          {/* INICIO (ZARA STYLE) */}
          <Route path="/inicio" element={<Inicio />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
