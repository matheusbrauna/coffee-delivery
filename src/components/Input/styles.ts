import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8px;
  position: relative;

  > p {
    color: ${({ theme }) => theme.colors['base-error']};
  }
`

interface InputStyleContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  width: 100%;
  height: 42px;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-input']};
  overflow: hidden;

  transition: border-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors['base-error']};
    `}
`

export const InputStyled = styled.input`
  height: 100%;
  flex: 1;
  background: none;
  border: none;

  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 12px;
  padding: 0 12px;

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const RightText = styled.p`
  font-size: 12px;
  margin-right: 12px;
  font-style: italic;
  color: ${({ theme }) => theme.colors['base-label']};
`
