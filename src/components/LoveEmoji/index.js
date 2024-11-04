import './index.css'

const LoveEmoji = props => {
  const {emojiUrl} = props
  return (
    <div className="thank-you-card">
      <img src={emojiUrl} className="love-img" alt="love emoji" />
      <h1>Thank You!</h1>
      <p>
        We will use your feedback to improve our customer support performance
      </p>
    </div>
  )
}

export default LoveEmoji
