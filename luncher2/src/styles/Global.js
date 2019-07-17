import { css } from 'styled-components';

export const Global = css`
    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
    }
    html {
        font-size: 62.5%;
    }
    .body {
        background-color: #e8e9eb;
        /* padding-top: 10px; */
        height: 100vh;
        display: flex;
        flex-direction: row;
    }
    .h1 {
        font-size: 2.5rem;
    }
    .h2 {
        font-size: 2.3rem;
    }
    .h3 {
        font-size: 2rem;
    }
    p {
        font-size: 1.8rem;
    }

    .hidden {
        display: none;
    }

    .error {
        width: 100%;
        height: 50px;
        background-color: #c2095a;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
    }
`;
