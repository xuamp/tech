import "./NavBar.css";

function NavBar() {

  function menu () {
    const contenedor = document.getElementsByClassName("contenedor")
    contenedor.style.display = "line"
  }
  return (
    <div className="NavBar">
      <div className="boton-desplegable" onClick={menu}>
        <i class="fa-solid fa-bars"></i>
      </div>
      <div className="contenedor-logo">
        <img className="img-logo" src="imagenes/log.jpeg" alt="logo" />
      </div>
      <div className="contenedor-listado">
        <ul className="listado">
          <li className="listado-item">Productos</li>
          <li className="listado-item">Contacto</li>
          <li className="listado-item">FAQ</li>
        </ul>
      </div>
      <div className="contenedor-buscador">
        <div className="contenedor-lupita">
          <input className="formu" type="text" placeholder="Buscar" />
          <i className="fa-solid fa-magnifying-glass nav-bar"></i>
        </div>
        <i className="fa-brands fa-instagram nav-bar"></i>
        <div className="carrito">
          <i className="fa-solid fa-bag-shopping nav-bar"></i>
          <p>5</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
