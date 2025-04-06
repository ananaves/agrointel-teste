import { BrowserRouter, Route, Routes } from "react-router-dom";
import PgInicio from "./assets/Pages/Pg-inicio/PgInicio";
import PgFuncio from "./assets/Pages/Pg-funcio/Pgfuncio";
// import PgChatIA from "./assets/Pages/Pg-chatIA/PgchatIA";
import PgPlanta from "./assets/Pages/Pg-planta/PgPlanta"
import { APP_ROUTES } from "./appConfig";
import PgSolo from "./assets/Pages/Pg-solo/PgSolo";



function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={APP_ROUTES.ROUTE_INICIO} element={<PgInicio />}/>
            <Route path={APP_ROUTES.ROUTE_FUNCIO} element={<PgFuncio />}/>
            {/* <Route path={APP_ROUTES.ROUTE_CHATIA} element={<PgChatIA />}/> */}
        <Route path={APP_ROUTES.ROUTE_PLANTA} element={<PgPlanta/>}/>
        <Route path={APP_ROUTES.ROUTE_SOLO} element={<PgSolo/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;