import { NavLink } from 'react-router-dom'
import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { ConfirmationSectionContainer } from './styles'

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ 9.90</RegularText>
      </div>

      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 3.50</RegularText>
      </div>

      <div>
        <RegularText size="l" weight="700" color="subtitle">
          Total
        </RegularText>
        <RegularText size="l" weight="700" color="subtitle">
          R$ 32.20
        </RegularText>
      </div>

      <NavLink to="/orderConfirmed">
        <Button text="Confirmar pedido" />
      </NavLink>
    </ConfirmationSectionContainer>
  )
}
