import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    font-weight: 700;
    align-self: flex-start;
  }

  @media (max-width: 350px) {
    flex-direction: column;

    > p {
      margin-left: 2rem;
      margin-top: 1rem;
    }
  }
`

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0 0.5rem;
  height: 100%;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors['base-text']};
  background-color: ${({ theme }) => theme.colors['base-button']};

  border: none;
  border-radius: 6px;

  transition: background-color 0.2s;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`
