import { produce } from 'immer'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../pages/components/CoffeeCard'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextData {
  cartQuantity: number
  cartItemsTotal: number
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemsQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: number) => void
  clearCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = '@CoffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }

    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const isCoffeeAlreadyInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (isCoffeeAlreadyInCart < 0) {
        draft.push(coffee)
      } else {
        draft[isCoffeeAlreadyInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemsQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const isCoffeeInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (isCoffeeInCart >= 0) {
        const item = draft[isCoffeeInCart]
        draft[isCoffeeInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const isCoffeeInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (isCoffeeInCart >= 0) {
        draft.splice(isCoffeeInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  function clearCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeCartItemsQuantity,
        removeCartItem,
        cartItemsTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
