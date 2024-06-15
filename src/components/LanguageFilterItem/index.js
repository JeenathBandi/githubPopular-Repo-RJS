// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData} = props
  const {id, language} = languageFiltersData
  return (
    <button className="btn" type="button">
      {language}
    </button>
  )
}

export default LanguageFilterItem
