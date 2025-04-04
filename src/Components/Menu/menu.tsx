import estilo from './menu.module.css'
import logo from '../../assets/Img/AgroIntel.png'
import { APP_ROUTES } from '../../appConfig';

function Menu() {

  return (
    <header className={estilo.menu}>

      <a className='logo' href={APP_ROUTES.ROUTE_INICIO}>
        <img src={logo} alt="AgroIntel Logo" />
      </a>
      <div className="menu-content">
        <div className="nome">
          <h2>AgroIntel</h2>
          <h6>Planeje sua safra com inteligência e colha melhores resultados!</h6>
        </div>
      </div>
      <nav>
        <a href={APP_ROUTES.ROUTE_FUNCIO}>FUNCIONALIDADES</a>
        <a href={APP_ROUTES.ROUTE_CHATIA}>CHAT IA</a>
      </nav>

    </header>
  );
}

export default Menu;