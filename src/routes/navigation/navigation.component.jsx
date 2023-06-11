import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import Logo from "../../assets/store.svg"
import "./navigation.style.scss"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

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
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
