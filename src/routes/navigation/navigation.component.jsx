import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"
import Logo from "../../assets/store.svg"
import "./navigation.style.scss"

const Navigation = () => {
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
          <Link className='nav-link' to='/sign-in'>
            sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
