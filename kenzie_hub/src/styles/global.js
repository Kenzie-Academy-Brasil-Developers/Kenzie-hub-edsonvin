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

h1, h2{
    font-size: 25px;
    font-family: 'Inter';
    font-weight: 700;
}

h2{
    color: var(--pink_primary);
    font-size:2rem;
}

h3{
    font-size: 18px;
    font-weight: 700;
}



button{
    cursor: pointer;
    background-color: var(--pink_primary);
    color: var(--grey_0);
    border-radius: 3px;
    border: none

}

input, button, select{
    height: 48px;
    width: 329px;
    font-size: 16px;
    margin: 10px;
}

input, select{
    background-color: var(--grey_2);
    color: var(--grey_1);
    border-radius: 3px;
    border: none;
}


a{
    text-decoration: none;
}

label{
    color: var(--grey_0)
}



`;
