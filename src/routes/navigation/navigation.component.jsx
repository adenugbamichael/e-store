import Logo from "../../assets/store.svg"
import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { selectCurrentUser } from "../../store/user/user.selector"
import { selectIsCartOpen } from "../../store/cart/cart.selector"
import { signOutUser } from "../../utils/firebase/firebase.utils"

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles"

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

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
