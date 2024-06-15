import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    repositoryitemList: [],
    activeId: languageFiltersData[0].id,
    isLoading: true,
  }

  componentDidMount() {
    this.getRepositoryList()
  }

  getRepositoryList = async () => {
    const {repositoryitemList, activeId} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeId}`,
    )

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.popular_repos.map(each => ({
        avatarUrl: each.avatar_url,
        forksCount: each.forks_count,
        id: each.id,
        issuesCount: each.issues_count,
        name: each.name,
        starsCount: each.stars_count,
      }))
      this.setState({repositoryitemList: updatedData, isLoading: false})
    }
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {repositoryitemList, isLoading} = this.state
    console.log(repositoryitemList)
    return (
      <div className="github-popular-repo-container">
        <h1 className="popular-heading">Popular</h1>
        <div className="language-filter-item-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem languageFiltersData={each} key={each.id} />
          ))}
        </div>
        {isLoading ? (
          this.renderLoader()
        ) : (
          <div className="respository-item-container">
            {repositoryitemList.map(each => (
              <RepositoryItem reposItemList={each} key={each.id} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
