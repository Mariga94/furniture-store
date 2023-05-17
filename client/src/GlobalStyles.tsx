import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #518581;
    --text-color: #AFADB5;
  }

  body {
    background: #f9f9f9;
  }

  h1,h2,h3,h4,h6,h6 {
    font-weight: 700;
  }

    h1 {
      font-size: 4rem;
      color: #151411;
      font-weight: 700;
      line-height:5.1875;
      margin: 0;
    }
    p {
       font-size: 1.125rem;
       font-weight: 500;
       line-height: 2rem;
       color: #AFADB5;
    }

    button {
      cursor: pointer;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.4375rem;
    }

    input {
      line-height:2rem; 
    }
    input[type=text]:focus {
      border: 1px solid #518581;
    }

    ::placeholder {
      font-style: italic;
      color: #AFADB5;
      line-height:;
    }

    li {
      list-style: none;
    }

`;
