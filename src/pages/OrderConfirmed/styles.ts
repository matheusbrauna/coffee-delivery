import styled from 'styled-components'

export const OrderConfirmedPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;
  padding-bottom: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  > section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    p {
      color: ${({ theme }) => theme.colors['base-text']};
    }

    img {
      width: 30.75rem;
    }
  }

  @media (max-width: 1024px) {
    > section {
      display: block;

      img {
        margin-top: 1rem;
        margin-inline: auto;
      }
    }
  }
`

export const OrderDetailsContainer = styled.div`
  position: relative;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors['base-background']};
  width: minmax(32rem, 100%);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: -1px;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
