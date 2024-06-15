// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {reposItemList} = props
  const {
    avatarUrl,
    forksCount,
    id,
    issuesCount,
    name,
    starsCount,
  } = reposItemList

  return (
    <div className="repo-item">
      <img src={avatarUrl} alt={name} className="avatar-img" />
      <p className="name">{name}</p>
      <div className="detail-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="star-img"
          />
          <p className="star-count">{starsCount}</p>
          <p className="star-count">stars</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="stars"
            className="star-img"
          />
          <p className="star-count">{forksCount}</p>
          <p className="star-count">forks</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="stars"
            className="star-img"
          />
          <p className="star-count">{issuesCount}</p>
          <p className="star-count">open issues</p>
        </div>
      </div>
    </div>
  )
}

export default RepositoryItem
