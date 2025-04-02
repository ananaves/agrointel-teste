import estilo from './menu.module.css'
import logo from '../../assets/Img/AgroIntel.png'


function Menu() {
    return (
      <header className={estilo.menu}>
        <img src={logo} alt="AgroIntel Logo" />
        <div className="menu-content">
          <div className="nome">
              <h2>AgroIntel</h2>
            <p>Planeje sua safra com inteligência e colha melhores resultados!</p>
          </div>
        </div>
        <nav>
          <button className="botao" type="submit">FUNCIONALIDAES</button>
          <button className="botao" type="submit">CHAT IA</button>
        </nav>
      </header>
    );
  }
  
  export default Menu;