import estilo from './rodape.module.css'
import icon1 from '../../assets/Img/facebook.png'
import icon2 from '../../assets/Img/instagram.png'
import icon3 from '../../assets/Img/whatsapp.png'
import logo from '../../assets/Img/AgroIntel.png'

function Rodape() {
    return (
        <footer className={estilo.rodape}>
            <div className="redes-sociais">
                <div className='facebook'>
                    <img src={icon1} />
                    <p>Facebook</p>
                </div>
                <div className='intagram'>
                    <img src={icon2} />
                    <p>Intagram</p>
                </div>
                <div className='whatsapp'>
                    <img src={icon3} />
                    <p>WhatsApp</p>
                </div>
            </div>

            <div className="endereco">
                <p>Avenida Brigadeira Faria Lima, 263 – Pinheiros, São Paulo, SP – 01000-000</p>
                <p>(16) 99253-8356</p>
            </div>

            <div className="info-adicional">
                <p>Política de Privacidade</p>
                <img src={logo} />
                <p>AgroIntel@contato.com</p>
            </div>

        </footer>
    );

}

export default Rodape;