import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  rightReview = () => {
    this.setState(preState => ({
      index: preState.index + 1,
    }))
  }

  leftReview = () => {
    this.setState(preState => ({
      index: preState.index - 1,
    }))
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="img" />
        <div className="arrowContainer">
          <button
            type="button"
            data-testid="leftArrow"
            onClick={index > 0 && this.leftReview}
            className="btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>

          <p className="name">{username}</p>
          <button
            type="button"
            data-testid="rightArrow"
            onClick={index < reviewsList.length - 1 && this.rightReview}
            className="btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="para">{companyName}</p>
        <p className="para">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
