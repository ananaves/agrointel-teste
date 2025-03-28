import estilo from './inicio.module.css'
import imgc from '../../assets/Img/imagemCirculo.jpg'
import img1 from '../../assets/Img/imagem.jpg';
import img2 from '../../assets/Img/imagem2 .jpg'
import img3 from '../../assets/Img/imagem.webp';
import icone1 from '../../assets/Img/qualidade.png';
import icone2 from '../../assets/Img/funcionamento-facil.png';
import icone3 from '../../assets/Img/adaptação.png';
import icone4 from '../../assets/Img/planejamento.png';


function Inicio() {
    return (
        <section className={estilo.inicio}>
            <div className={estilo.sobretexto}>
                <h2>Sobre nós</h2>
                <h4>Inteligência que transforma o seu planejamento de safra</h4>
                <p> O AgroIntel é um software de planejamento agrícola com inteligência artificial,
                    desenvolvido para produtores de médio porte que buscam mais eficiência e rentabilidade.</p>

                <p>Com base em dados climáticos, qualidade do solo e tendências de mercado, o AgroIntel analisa
                    e sugere as melhores culturas a serem plantadas em cada região e período, ajudando você a
                    tomar decisões estratégicas com segurança.</p>

                <p>Plante com inteligência. Colha com estratégia.</p>
            </div>

            <img className={estilo.imagem} src={imgc} />

            <div className={estilo.destaques}>
                <div className='qualidade'>
                    <img src={icone1} />
                    <p>Recomendações personalizadas</p>

                </div>
                <div className='funcionamento'>
                    <img src={icone2} />
                    <p>Adaptações às necessidades específicas</p>
                </div>

                <div className={estilo.adaptacao}>
                    <img src={icone3} />
                    <p> Facilidade de uso</p>
                </div>
                <div className={estilo.planejamento}>
                    <img src={icone4} />
                    <p> Planejamento eficiente, produtivo e sustentável</p>
                </div>
            </div>

            <section className={estilo.imagens}>
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
            </section>

            <section className={estilo.depoimentos}>
                <div className="card">
                    <h5>QUEM USA RECOMENDA !</h5>
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
