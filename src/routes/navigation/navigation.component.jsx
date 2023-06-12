import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import Logo from "../../assets/store.svg"
import "./navigation.style.scss"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../contexts/cart.context"

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={Logo} alt='Store logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              sign out
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              sign in
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
