import {Component} from 'react'
import EmojiItem from '../EmojiItem'
import LoveEmoji from '../LoveEmoji'
import './index.css'

class Feedback extends Component {
  state = {
    isClicked: false,
  }

  onStatusChange = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="response-card">
          {isClicked ? (
            <LoveEmoji emojiUrl={loveEmojiUrl} />
          ) : (
            <>
              <h1 className="heading-ele">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="ul-container">
                {emojis.map(eachItem => (
                  <EmojiItem
                    key={eachItem.id}
                    emojiItem={eachItem}
                    emojiBtn={this.onStatusChange}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
