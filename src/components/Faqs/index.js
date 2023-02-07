import {Component} from 'react'
import FaqItem from '../FaqItem/index'
import './index.css'

class Faqs extends Component {
  state = {idList: []}

  showAnswerToggle = id => {
    const {idList} = this.state
    if (idList.includes(id)) {
      const list = idList.filter(item => item !== id)
      this.setState({idList: list})
      console.log(list)
    } else {
      this.setState(prevState => ({idList: [...prevState.idList, id]}))
    }
  }

  render() {
    const {faqsList} = this.props
    const {idList} = this.state

    return (
      <div className="main-content">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <div>
            <ul>
              {faqsList.map(faqItem => (
                <FaqItem
                  idList={idList}
                  faqItem={faqItem}
                  showAnswerToggle={this.showAnswerToggle}
                  key={faqItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
