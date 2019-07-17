import { css } from 'styled-components';

export const FormStyle = css`
    .formWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10%;
    }
    .logo {
        width: 200px;
        height: 200px;
    }

    .loginForm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 200px;
        width: 100%;
        margin: 20px auto;
        border: 1px solid gray;
        border-radius: 4px;
        padding: 10px;
    }
    .loginForm input {
        margin: 5px 0;
    }
    .loginForm p {
        text-align: center;
    }
    .registerForm {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        width: 100%;
        margin: 20px auto;
        border: 1px solid gray;
        border-radius: 4px;
        padding: 10px;
    }
    .registerForm input {
        margin: 5px 0;
    }
    .registerForm .radio {
        display: flex;
    }
    .registerForm .radio label {
        margin-left: 20px;
    }

    .hide {
        display: none;
    }
    .show {
        display: flex;
    }
    .link {
        color: #180aaf;
        cursor: pointer;
    }

    .loginLoader {
        position: absolute;
        left: 45%;
        top: 45%;
    }
`;
