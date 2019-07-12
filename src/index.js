import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    #root {
        height: 100%;
    }
`

const theme = {
    spacingSmall: "8px",
    spacingMedium: "16px",
    spacingLarge: "24px",
    spacingHuge: "32px",
    headerHeight: "50px",
    leftDrawerWidth: "200px",
    borderColor: "#ececec"
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Fragment>
            <GlobalStyle />
            <App />
        </Fragment>
    </ThemeProvider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
