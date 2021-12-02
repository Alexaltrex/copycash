import {HashRouter} from "react-router-dom";
import {App} from "./App";

export const AppContainer = () => {
    return (
        <HashRouter>
            <App/>
        </HashRouter>
    )
}