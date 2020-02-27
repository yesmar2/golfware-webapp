import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from './state/store';
import App from './App';

const grey200 = '#E0E7F0';

const theme = {
    colors: {
        green: '#30da7b',
        red: '#EE6352',
        yellow: '#FFE74C',
        purple: '#731DD8',
        blue: '#3FA7D6',
        grey: {
            100: '#F6F7F9',
            200: grey200,
            300: '#B6BDC7',
            400: '#666D76',
            500: '#414042',
        },
    },
    spacingTiny: '4px',
    spacingSmall: '8px',
    spacingMedium: '16px',
    spacingLarge: '24px',
    spacingHuge: '32px',
    headerHeight: '64px',
    leftDrawerWidth: '256px',
    defaultBorder: `1px solid ${grey200}`,
};

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${(props) => props.theme.colors.grey[500]};
        background: ${(props) => props.theme.colors.grey[100]};
        font-size: 14px;
        line-height: 1;
    }

    #root {
        height: 100%;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const reduxStore = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <ReduxProvider store={reduxStore}>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <App />
                </>
            </ThemeProvider>
        </ReduxProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
