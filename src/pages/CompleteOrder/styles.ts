import styled from 'styled-components'

export const CompleteOrderContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const SectionBaseStyle = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
