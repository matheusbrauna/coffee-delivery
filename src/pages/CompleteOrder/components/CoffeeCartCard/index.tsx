import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { FormatMoney } from '../../../../utils/FormatMoney'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemsQuantity, removeCartItem } = useCart()

  function handleIncreaseQuantity() {
    changeCartItemsQuantity(coffee.id, 'increase')
  }

  function handleDecreaseQuantity() {
    changeCartItemsQuantity(coffee.id, 'decrease')
  }

  function handleRemoveCartItem() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = FormatMoney(coffeeTotal)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />

        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onDecreaseQuantity={handleDecreaseQuantity}
              onIncreaseQuantity={handleIncreaseQuantity}
            />

            <RemoveButton onClick={handleRemoveCartItem}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
