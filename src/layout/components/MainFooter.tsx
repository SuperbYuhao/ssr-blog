import { Link } from "react-router-dom"
import { SocialUrl, Records, BlogAuthor } from "../../assets/appConfig"

const MainFooter = () => {
  return (
    <div className='footer-content'>
      <div>
        {
          SocialUrl.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              target="_blank"
              rel="noopener noreferrer">
              {item.name}{' / '}
            </Link>
          ))
        }
      </div>
      <div>
        {
          Records.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              target="_blank"
              rel="noopener noreferrer">
              {item.name}
            </Link>
          ))
        }
      </div>
      <div>© {new Date().getFullYear()} {BlogAuthor}. All rights reserved.</div>
    </div>
  )
}

export default MainFooter