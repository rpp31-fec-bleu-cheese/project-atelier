
import React from 'react';


var Rating = (props) => {
  var finalRating = 6;
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

