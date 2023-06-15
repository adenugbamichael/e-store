import { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"
import Logo from "../../assets/store.svg"
import {
  LogoContainer,
  NavLink,
  NavLinks,
  NavigationContainer,
} from "./navigation.styles"

import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../contexts/cart.context"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={Logo} alt='Store logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              sign out
            </NavLink>
          ) : (
            <NavLink to='/auth'>sign in</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
