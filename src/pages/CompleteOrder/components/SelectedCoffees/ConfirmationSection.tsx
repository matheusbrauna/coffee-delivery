import { NavLink } from 'react-router-dom'
import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { FormatMoney } from '../../../../utils/FormatMoney'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()

  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = FormatMoney(cartItemsTotal)
  const formattedCartTotal = FormatMoney(cartTotal)
  const formatDelivery = FormatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>

      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatDelivery}</RegularText>
      </div>

      <div>
        <RegularText size="l" weight="700" color="subtitle">
          Total
        </RegularText>
        <RegularText size="l" weight="700" color="subtitle">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button
        text="Confirmar pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
