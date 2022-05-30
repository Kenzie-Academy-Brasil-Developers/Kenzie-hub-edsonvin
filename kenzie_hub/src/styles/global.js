import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
}

:root{
    --pink_primary: #FF577F;
    --pink_focus: #FF427F;
    --pink_negative: #59323F;
    --grey_4: #121214;
    --grey_3:#212529;
    --grey_2:#343B41;
    --grey_1:#868E96;
    --grey_0:#F8F9FA;

}

body{
    background-color: var(--grey_4);
    color: var(--grey_0);
}

body, input, button{
    font-family: 'Inter';
    font-size: 12px;
}

h1, h2, h3{
    font-size: 16px;
    font-family: 'Inter';
    font-weight: 700;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}



`;
