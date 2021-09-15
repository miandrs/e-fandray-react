import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
        transition: all 0.50s linear;
    }
    .card {
        background: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), url("../assets/images/background.png");
    }`
