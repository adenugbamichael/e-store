import { cart } from "../../assets"
import { useDispatch, useSelector } from "react-redux"

import { CartIconContainer, ItemCount } from "./cart-icon.styles"
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector"
import { setIsCartOpen } from "../../store/cart/cart.reducer"

const CartIcon = () => {
  const dispatch = useDispatch()

  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <img src={cart} alt='cart' style={{ width: "24px", height: "24px" }} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
