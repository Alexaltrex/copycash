import {ThemeProvider} from "@mui/material";
import {HashRouter} from "react-router-dom";
import {App} from "./App";
import {theme} from "../../theme/theme";
import React from "react";

export const AppContainer = () => {
    return (
        <HashRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </HashRouter>
    )
}