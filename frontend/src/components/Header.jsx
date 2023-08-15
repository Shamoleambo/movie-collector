import { Link } from 'react-router-dom'
import { RiMovie2Fill } from 'react-icons/ri'
import { BsCartFill } from 'react-icons/bs'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='pageTitle'>
        <h1>
          <Link to='/'>Movie Collector</Link>
        </h1>
      </div>
      <nav className='navigation'>
        <ul className='links'>
          <li>
            <Link to='/'>
              Home{' '}
              <span className='link-icon'>
                <RiMovie2Fill />
              </span>
            </Link>
          </li>
          <li>
            Cart{' '}
            <span className='link-icon'>
              <BsCartFill />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
