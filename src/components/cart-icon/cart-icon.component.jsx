import { useContext } from "react"
import { cart } from "../../assets"
import { CartContext } from "../../contexts/cart.context"
import { CartIconContainer, ItemCount } from "./cart-icon.styles"

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <img src={cart} alt='cart' style={{ width: "24px", height: "24px" }} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
