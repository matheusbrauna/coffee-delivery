import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/number-input'
import { Minus, Plus } from '@phosphor-icons/react'

interface QuantityInputProps {
  quantity: number
}

export function QuantityInput({ quantity = 0 }: QuantityInputProps) {
  return (
    <NumberInput
      value={quantity}
      min={0}
      w={72}
      h={40}
      bg="#E6E5E5"
      rounded={6}
      isDisabled={quantity <= 1}
    >
      <NumberInputStepper flexDir="row" alignItems="center" p={8}>
        <NumberDecrementStepper>
          <Minus className="text-brand-purple disabled:text-base-label" />
        </NumberDecrementStepper>
        <NumberInputField
          textAlign="center"
          bg="none"
          _focus={{ outline: 'none' }}
          readOnly
        />
        <NumberIncrementStepper>
          <Plus className="text-brand-purple" />
        </NumberIncrementStepper>
      </NumberInputStepper>
    </NumberInput>
  )
}
