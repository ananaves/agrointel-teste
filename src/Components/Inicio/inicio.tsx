import estilo from './inicio.module.css'
// import imgCirculo from '../../assets/Img/';
import img1 from '../../assets/Img/imagem.jpg';
import img2 from '../../assets/Img/imagem.jpg';
import img3 from '../../assets/Img/imagem.webp';
import icone1 from '../../assets/Img/qualidade.png';
import icone2 from '../../assets/Img/funcionamento-facil.png';
import icone3 from '../../assets/Img/adaptação.png';
import icone4 from '../../assets/Img/planejamento.png';


function Inicio() {
    return (
        <section className={estilo.inicio}>
            <div className='sobre-texto'>
                <h2>Sobre nós</h2>
                <h3>Inteligência que transforma o seu planejamento de safra</h3>
                <p> O AgroIntel é um software de planejamento agrícola com inteligência artificial,
                    desenvolvido para produtores de médio porte que buscam mais eficiência e rentabilidade.</p>

                <p>Com base em dados climáticos, qualidade do solo e tendências de mercado, o AgroIntel analisa
                    e sugere as melhores culturas a serem plantadas em cada região e período, ajudando você a
                    tomar decisões estratégicas com segurança.</p>

                <p>Plante com inteligência. Colha com estratégia.</p>

                {/* <div className='imgSobre'>
                    <img src={imgCirculo} />
                </div> */}

            </div>

                <div className="destaques">
                    <div className='qualidade'>
                        <img src={icone1} />
                        <p>Recomendações personalizadas</p>
                    </div>
                    <div className='funcionamento'>
                        <img src={icone2} />
                        <p>Adaptações às necessidades específicas</p>
                    </div>
                    <div className='adaptacao'>
                        <img src={icone3} />
                        <p> Facilidade de uso</p>
                    </div>
                    <div className='planejamento'>
                        <img src={icone4} />
                        <p> Planejamento eficiente, produtivo e sustentável</p>
                    </div>
                </div>

            

            <section className="imagens">
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
            </section>

            <section className="depoimentos">
                <div className="card">
                    <h3>QUEM USA RECOMENDA !</h3>
                    <p>“Depois do AgroIntel, minha produtividade aumentou e parei de plantar no escuro.”
                        <br />– João S., produtor de milho, MG </p>
                    <p className="estrelas">⭐⭐⭐</p>
                    <p> “As recomendações de cultura fizeram toda a diferença na última safra.”
                        <br />– Marina R., produtora de soja, PR </p>
                    <p className="estrelas">⭐⭐⭐⭐</p>
                </div>
            </section>


        </section>
    );
}

export default Inicio;
