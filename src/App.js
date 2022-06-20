import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";
import Home from "./components/Home";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux"
import store from "./store"
import "./App.css"

const App = () => {
    return (
        <CssBaseline>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Router>
                        <Home/>
                    </Router>
                </ThemeProvider>
            </Provider>
        </CssBaseline>
    );
}

export default App;
