import styled from 'styled-components'

export const InputStyleContainer = styled.input`
  width: 100%;
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-input']};

  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  transition: border-color 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
