import './index.css'

const FaqItem = props => {
  const {faqItem, showAnswerToggle, idList} = props
  const {id, questionText, answerText} = faqItem

  const isIdIncluded = idList.includes(id)

  const imageUrl = isIdIncluded
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const imageAltText = isIdIncluded ? 'minus' : 'plus'

  const showAnswer = () => {
    showAnswerToggle(id)
  }

  return (
    <li className="list-item-style">
      <div className="question-content">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="button-style" onClick={showAnswer}>
          <img src={imageUrl} alt={imageAltText} />
        </button>
      </div>
      {isIdIncluded ? (
        <div>
          <hr />
          <p className="answer">{answerText}</p>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}

export default FaqItem
