import { Link } from "react-router-dom"

const MainNav = () => {
  return (
    <nav className='nav-content'>
      <ul>
        <li className='nav-item'>
          <Link to='/'>文章</Link>
        </li>
        <li className='nav-item'>
          <Link to='/about'>关于</Link>
        </li>
        <li className='nav-item'>
          <Link to='/archive'>归档</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav