import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img{
    display: block;
    max-width: 100%;
  }

  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  ::-webkit-scrollbar {
    width: .4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['base-button']}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors['brand-purple']}
  }

  :focus {
    border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }

    @media (max-width: 425px) {
      font-size: 81.25%; // 14px
    }
  }
`
