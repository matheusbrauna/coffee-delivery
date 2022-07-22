import styled from 'styled-components'

export const LayoutContainer = styled.div`
  .container {
    width: 100%;
    max-width: 1120px;
    margin-inline: auto;

    @media (max-width: 1200px) {
      padding-inline: 1.3vw;
    }

    @media (max-width: 1024px) {
      padding-inline: 1.5vw;
    }

    @media (max-width: 768px) {
      padding-inline: 2vw;
    }

    @media (max-width: 425px) {
      padding-inline: 3.765vw;
    }

    @media (max-width: 375px) {
      padding-inline: 4.267vw;
    }

    @media (max-width: 320px) {
      padding-inline: 5vw;
    }
  }
`
