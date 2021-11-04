
import React from 'react';
//import StarIcon from './StarIcon.jsx';
/*var Rating = (props) => {
  return(
    <div className="rating">
      <input type="radio" name="star" id="star1"></input>
      <input type="radio" name="star" id="star2"></input>
      <input type="radio" name="star" id="star3"></input>
      <input type="radio" name="star" id="star4"></input>
      <input type="radio" name="star" id="star5"></input>
    </div>

  )
}*/
/*var Rating = (props) => {
  var starCount = [1,2,3,4,5];
  return(
    <div className="rating">
      <div className="empty-stars"></div>
      <div className="full-stars" style={{"width":"50%"}}></div>
    </div>
  )
}*/
var Rating = (props) => {
  return (
    <div>
     <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
    </div>
  )
}
export default Rating;

/*{starCount.map((count) => (
        <StarIcon key={count}/>
      )
      )}*/