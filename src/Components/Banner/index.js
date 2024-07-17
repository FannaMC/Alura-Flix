import Categorias from "../Category/Category"
import "./Banner.css"
import GlobalStyle from "../../GlobalStyled/GlobalStyled"

const Banner = () => {
    return <div className="banner">
        <GlobalStyle />
        <div className="front">
            <div className="frontdes">
                <h1>FRONT END</h1>
                <h2>CHALLENGE REACT</h2>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <img src="/img/player.png" alt="player" style={{borderRadius:"20px"}}/>
        </div>
        <Categorias />
    </div>
}

export default Banner