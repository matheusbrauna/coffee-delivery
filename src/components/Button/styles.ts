import styled from 'styled-components'

export const ButtonContainer = styled.button`
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  font-weight: 700;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors['base-white']};
  background-color: ${({ theme }) => theme.colors['brand-yellow']};

  border: none;
  border-radius: 0.375rem;
  padding: 0.75rem 0.5rem;
  margin-top: 0.7rem;

  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`
