import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.colors['base-background']};

  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: 0;
  padding-inline: 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};

  ${({ variant, theme }) => css`
    background-color: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ variant }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${({ theme }) => theme.colors[`brand-${variant}`]};
      }
    `}
`
