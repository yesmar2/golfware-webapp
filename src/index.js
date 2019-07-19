import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        green: "#30da7b",
        red: "#EE6352",
        yellow: "#FFE74C",
        purple: "#731DD8",
        blue: "#3FA7D6",
        grey: {
            100: "#F6F7F9",
            200: "#E0E7F0",
            300: "#B6BDC7",
            400: "#666D76",
            500: "#414042"
        }
    },
    spacingSmall: "8px",
    spacingMedium: "16px",
    spacingLarge: "24px",
    spacingHuge: "32px",
    headerHeight: "64px",
    leftDrawerWidth: "256px"
}

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        color: ${props => props.theme.colors.grey[500]};
        background: ${props => props.theme.colors.grey[100]};
    }

    #root {
        height: 100%;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
`

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
