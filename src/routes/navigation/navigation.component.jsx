import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import Logo from "../../assets/store.svg"
import "./navigation.style.scss"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

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
            <span className='nav-link' onClick={signOutHandler}>
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
