import { BrowserRouter, Route, Routes } from "react-router-dom";
import PgInicio from "./assets/Pages/Pg-inicio/PgInicio";
import PgFuncio from "./assets/Pages/Pg-funcio/Pgfuncio";
import PgChatIA from "./assets/Pages/Pg-chatIA/PgchatIA";
import { APP_ROUTES } from "./appConfig";



function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={APP_ROUTES.ROUTE_INICIO} element={<PgInicio />}/>
            <Route path={APP_ROUTES.ROUTE_FUNCIO} element={<PgFuncio />}/>
            <Route path={APP_ROUTES.ROUTE_CHATIA} element={<PgChatIA />}/>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;