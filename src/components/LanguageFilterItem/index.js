// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData, onGetFilter, gotSelected} = props
  const {id, language} = languageFiltersData
  const onSelectBtn = () => onGetFilter(id)

  const btnRedstyle = gotSelected && 'red-btn'

  return (
    <button
      className={`btn ${btnRedstyle}`}
      type="button"
      onClick={onSelectBtn}
    >
      {language}
    </button>
  )
}

export default LanguageFilterItem

