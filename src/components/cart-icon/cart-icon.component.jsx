import { useContext } from "react"
import { cart } from "../../assets"
import "./cart-icon.styles.scss"
import { CartContext } from "../../contexts/cart.context"

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <img src={cart} alt='icon' className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
