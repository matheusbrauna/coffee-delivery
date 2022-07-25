import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  size?: 'medium' | 'small'
  onDecreaseQuantity: () => void
  onIncreaseQuantity: () => void
  quantity: number
}

export function QuantityInput({
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  size = 'medium',
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecreaseQuantity}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncreaseQuantity}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
