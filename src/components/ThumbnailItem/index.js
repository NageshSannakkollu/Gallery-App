// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, clickedOnImage, isImageActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails

  const imageButton = () => {
    clickedOnImage(id)
  }

  const thumbnailClassName = isImageActive ? 'active' : 'in-active'
  console.log(isImageActive)

  return (
    <li className="thumbnail-container">
      <button type="button" className="image-button" onClick={imageButton}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
