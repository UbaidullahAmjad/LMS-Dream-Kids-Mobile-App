import React from 'react';
import StarRating from 'react-native-star-rating';

class RatingStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: this.props?.value,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    return (
      <StarRating
        // disabled
        starSize={this.props.overview ? 7 : 16}
        starStyle={{
          marginLeft: 5,
        }}
        fullStarColor='orange'
        emptyStarColor='orange'
        containerStyle={{
          width: this.props.overview ? 14 : 50
        }}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={rating => this.onStarRatingPress(rating)}
      />
    );
  }
}

export default RatingStars;
