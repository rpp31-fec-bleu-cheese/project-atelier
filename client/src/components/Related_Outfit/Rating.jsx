
import React from 'react';
import StarIcon from './StarIcon.jsx';
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
/*
<div id='Related_Rating'>
  <div className='Stars'>
    <div className='empty-stars'></div>
    <div className='full-stars' style={{width: ((finalRating / 5) * 100) + '%' }}></div>
  </div>
</div>
*/
var Rating = (props) => {
  var finalRating = 6;
  var countArray = [1,2,3,4,5];
  if(finalRating === 6) {
    return (
      <div>
        <i className="far fa-star" ></i> <i className="far fa-star" ></i> <i className="far fa-star" ></i> <i className="far fa-star" ></i> <i className="far fa-star" ></i>
      </div>
    )
  }
  return (
    <div id='Related_Rating'>
  <div className='Stars'>
    <div className='empty-stars'></div>
    <div className='full-stars' style={{width: ((finalRating / 5) * 100) + '%' }}></div>
  </div>
</div>
  )
}
export default Rating;

/*{starCount.map((count) => (
        <StarIcon key={count}/>
      )
      )}*/