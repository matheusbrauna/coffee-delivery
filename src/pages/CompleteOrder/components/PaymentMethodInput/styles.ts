import styled from 'styled-components'

export const PaymentMethodInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  height: 3rem;
  padding: 0 1rem;

  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};

  font-size: 0.75rem;
  text-transform: uppercase;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};

  transition: background-color 0.2s;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  user-select: none;
`
