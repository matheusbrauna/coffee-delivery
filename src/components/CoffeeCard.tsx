import {
  NumberInput,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
} from '@chakra-ui/number-input'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import Image from 'next/image'

export function CoffeeCard() {
  return (
    <div className="max-w-[16rem] px-6 pb-5 bg-base-card rounded-md rounded-tr-[2.25rem]">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/assets/coffee.png"
          width={120}
          height={120}
          alt=""
          className="-mt-5"
        />
        <span className="px-2 flex items-center justify-center leading-5 h-5 mt-3 text-[0.625rem] font-bold uppercase rounded-full text-brand-yellow-dark bg-brand-yellow-light">
          Tradicional
        </span>
        <h3 className="mt-4 text-xl text-base-title leading-[130%] font-bold">
          Expresso Tradicional
        </h3>
        <p className="mt-2 text-sm text-base-label leading-[130%]">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </div>
      <div className="flex items-center justify-between mt-8">
        <p className="text-sm leading-[130%]">
          R$ <span className="text-2xl font-bold">9,90</span>
        </p>
        <div className="flex items-center gap-2">
          <NumberInput
            defaultValue={1}
            min={1}
            w={72}
            h={40}
            bg="#E6E5E5"
            rounded={6}
          >
            <NumberInputStepper flexDir="row" alignItems="center" p={8}>
              <NumberDecrementStepper
                _disabled={{
                  color: '#8D8686',
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
                }}
                color="#8047F8"
              >
                <Plus />
              </NumberIncrementStepper>
            </NumberInputStepper>
          </NumberInput>
          <button>
            <ShoppingCart
              className="w-10 h-10 p-2 text-white rounded-md bg-brand-purple-dark"
              weight="fill"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
