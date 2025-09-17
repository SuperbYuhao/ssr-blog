import { Link } from "react-router-dom"
import { Author, AuthorText } from "../../assets/appConfig"

const MainAuthor = () => {
  return (
    <div className='author-content'>
      <div className='author'>
        <Link to='/'>
          {Author}
        </Link>
      </div>
      <div className='author-text'>
        {AuthorText}
      </div>
    </div>
  )
}

export default MainAuthor