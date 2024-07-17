import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import "./Category.css"

const Categorias = () => {
  return <div>
    <div>

      <div className=" cards">

        <div className="categoria">
          <h1 className="tituloCardFront">FRONT END</h1>

          <div className="categoriaCard">
            <div className="card">
              <img src="./img/card1.jpeg" alt="video" className="imgCateA"/>
              <div className="botones">
                <button className="botonCate"><MdDeleteForever className="iconoBorrar"/>Borrar</button>
                <button className="botonCate"><CiEdit className="iconoEditar"/>Editar</button>
              </div>
            </div>

            <div className="card">
              <img src="./img/card2.jpeg" alt="video" className="imgCateA"/>
              <div className="botones">
                <button className="botonCate"><MdDeleteForever />Borrar</button>
                <button className="botonCate"><CiEdit />Editar</button>
              </div>
            </div>

            <div className="card">
              <img src="./img/card3.jpeg" alt="video" className="imgCateA"/>
              <div className="botones">
                <button className="botonCate"><MdDeleteForever />Borrar</button>
                <button className="botonCate"><CiEdit />Editar</button>
              </div>
            </div>
          </div>

        </div>

        <div className="categoria">
          <h1 className="tituloCardBack">BACK END</h1>

          <div className="categoriaCard">
            <div className="card">
              <img src="./img/card4.jpeg" alt="video" className="imgCateV"/>
              <div className="botones">
                <button className="botonCate"><MdDeleteForever />Borrar</button>
                <button className="botonCate"><CiEdit />Editar</button>
              </div>
            </div>

            <div className="card">
              <img src="./img/card5.jpeg" alt="video" className="imgCateV"/>
              <div className="botones">
                <button className="botonCate"><MdDeleteForever />Borrar</button>
                <button className="botonCate"><CiEdit />Editar</button>
              </div>
            </div>

            <div className="card">
              <img src="./img/card6.jpeg" alt="video" className="imgCateV"/>
              <div className="botones">
                <button className="botonCate"><MdDeleteForever />Borrar</button>
                <button className="botonCate"><CiEdit />Editar</button>
              </div>
            </div>
          </div>

        </div>

        <div className="categoria">
          <h1 className="tituloCardIn">INNOVACIÓN Y GESTIÓN</h1>

          <div className="categoriaCard">
            <div className="card">
              <img src="./img/card7.png" alt="video" className="imgCateY"/>
              <div className="botones">
                <button className="botonCate"><MdDeleteForever />Borrar</button>
                <button className="botonCate"><CiEdit />Editar</button>
              </div>
            </div>

            <div className="card">
              <img src="./img/card8.png" alt="video" className="imgCateY"/>
              <div className="botones">
                <button className="botonCate"><MdDeleteForever />Borrar</button>
                <button className="botonCate"><CiEdit />Editar</button>
              </div>
            </div>

            <div className="card">
              <img src="./img/card9.png" alt="video" className="imgCateY"/>
              <div className="botones">
                <button className="botonCate"><MdDeleteForever />Borrar</button>
                <button className="botonCate"><CiEdit />Editar</button>
              </div>
            </div>
          </div>

        </div>
    
      </div>

    </div>
  </div>
}

export default Categorias