import { createGlobalStyle } from 'styled-components';
import { Reset } from './Reset';
import { Global } from './Global';
import { FormStyle } from './FormStyle';
import { Elements } from './Elements';
// import { Buttons } from './Buttons';

export const GlobalStyles = createGlobalStyle`
    ${Reset}
    ${Global}
    ${FormStyle}
    ${FormStyle}
    ${Elements}
`;
