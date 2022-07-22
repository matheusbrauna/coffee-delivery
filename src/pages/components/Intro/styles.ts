import styled from 'styled-components'
import { rgba } from 'polished'
import introBackground from '../../../assets/intro-background.png'
import { TitleText } from '../../../components/Typography'

export const IntroContainer = styled.section`
  width: 100%;
  background: ${({ theme }) => `url(${introBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;
  padding-block: 5.75rem;
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  > div {
    flex: 1 1 36.75rem;
  }

  > img {
    flex: 1 1 100%;
    max-width: 476px;
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;

    > div {
      flex: 1 1 100%;
    }

    > img {
      flex: 1 1 100%;
      max-width: 320px;
    }
  }

  @media (max-width: 425px) {
    > img {
      flex: 1 1 100%;
      max-width: 240px;
    }
  }
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 1024px) {
    place-items: center;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
