import estilo from './rodape.module.css'
import icon1 from '../../assets/Img/facebook.png'
import icon2 from '../../assets/Img/instagram.png'
import icon3 from '../../assets/Img/whatsapp.png'

function Rodape() {
    return (
        <footer className={estilo.rodape}>
            <div className="social-container">
                <div className="social-icons">
                    <div className="facebook">
                        <p> <img src={icon1} alt="Facebook" /> Facebook</p>
                    </div>
                    <div className="whatsapp">
                        <p><img src={icon3} alt="WhatsApp" />WhatsApp</p>
                    </div>
                    <div className="instagram">
                        <p><img src={icon2} alt="Instagram" />Instagram</p>
                    </div>
                </div>
            </div>

            <div className="contatos">
                <p>Avenida Brigadeiro Faria Lima, 263 – Pinheiros, São Paulo, SP – 01000-000</p>
                <p>(16) 99253-8356</p>
                <p>AgroIntel@contato.com</p>
                <p>Política de Privacidade</p>
            </div>
        </footer>
    );
}


export default Rodape;