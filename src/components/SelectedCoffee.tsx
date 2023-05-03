import {
  NumberInput,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
} from '@chakra-ui/number-input'
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { BlurImage } from './BlurImage'

export function SelectedCoffee() {
  return (
    <div className="flex items-center gap-5 pb-6 mb-6 border-b last:pb-0 last:mb-0 last:border-0">
      <div className="relative w-16 h-16">
        <BlurImage
          src="/assets/coffee.png"
          fill
          alt=""
          quality={100}
          priority
        />
      </div>
      <div>
        <h3 className="text-base-subtitle leading-[130%]">
          Expresso Tradicional
        </h3>
        <div className="flex gap-2 mt-2">
          <NumberInput
            defaultValue={1}
            min={1}
            w={80}
            h={40}
            bg="#E6E5E5"
            rounded={6}
          >
            <NumberInputStepper flexDir="row" alignItems="center" p={8}>
              <NumberDecrementStepper
                _disabled={{
                  color: '#8D8686',
                  cursor: 'not-allowed',
                }}
                color="#8047F8"
              >
                <Minus />
              </NumberDecrementStepper>
              <NumberInputField
                textAlign="center"
                bg="none"
                _focus={{ outline: 'none' }}
                readOnly
              />
              <NumberIncrementStepper
                _disabled={{
                  color: '#8D8686',
                  cursor: 'not-allowed',
                }}
                color="#8047F8"
              >
                <Plus />
              </NumberIncrementStepper>
            </NumberInputStepper>
          </NumberInput>
          <button className="flex items-center gap-1 p-2 text-xs uppercase rounded-md bg-base-button">
            <Trash size={16} className="text-brand-purple" />
            Remover
          </button>
        </div>
      </div>
      <p className="ml-auto mb-auto font-bold leading-[130%]">R$ 9,90</p>
    </div>
  )
}
