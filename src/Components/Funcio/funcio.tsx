import estilo from './funcio.module.css'
import icon1 from '../../../src/assets/Img/planta.png'
import icon2 from '../../../src/assets/Img/solo.png'
import { APP_ROUTES } from '../../appConfig';

function PgFuncio() {
    return (
        <div className={estilo.funcio}>
            <div className={estilo.titulo}>
                <h2>O QUE OFERECEMOS?</h2>
            </div>
            <div className={estilo.conteiners}>
                <div className={estilo.conteinerEsq}>
                    <img src={icon1} alt="AnaAlise de solo" />
                    <p>Análise detalhada e mapeamento do solo em sintonia com o que deseja</p>
                </div>
                <div className={estilo.conteinerDir}>
                    <img src={icon2} alt="Recomendação de cultura" />
                    <p>Recomendação personalizada de culturas de acordo com seu objetivo</p>
                </div>

            </div>
            <div className={estilo.botoes}>
                <a className={estilo.botao1} href={APP_ROUTES.ROUTE_PLANTA}>ir</a>
                <a className={estilo.botao2} href={APP_ROUTES.ROUTE_SOLO}>ir</a>
            </div>
        </div>


    );
}

export default PgFuncio