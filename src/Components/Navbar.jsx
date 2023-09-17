import React from 'react'
import { Link } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
        <div className="navbar">
        <Link to="/" className='home'>Home</Link>
        <Link to="/contacto">Contacto</Link>
        </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar