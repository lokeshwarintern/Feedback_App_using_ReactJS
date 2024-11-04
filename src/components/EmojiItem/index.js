import './index.css'

const EmojiItem = props => {
  const {emojiItem, emojiBtn} = props
  const {name, imageUrl} = emojiItem

  return (
    <li className="list-ele">
      <button type="button" className="btn-ele" onClick={emojiBtn}>
        <img className="img-ele" src={imageUrl} alt={name} />
      </button>
      <p>{name}</p>
    </li>
  )
}

export default EmojiItem
