import React from 'react';
import PropTypes from 'prop-types';

const Breakdown = props => {
  let type = {
    Quality: ['Poor', 'Great'],
    Size: ['Too Small', 'Just Right', 'Too Large'],
    Comfort: ['Poor', 'Perfect'],
    Length: ['Too Short', 'Just Right', 'Too Long'],
    Width: ['Too Narrow', 'Just Right', 'Too Wide'],
    Fit: ['Too Tight', 'Just Right', 'Too Baggy']
  };
  let currentType = type[props.char[0]];
  let col = 0; // This value is used to help div.Trait determine where to place the its child text
  let typeRating = (props.char[1].value * 20) + '%'; // This value will create a percentage out of the type value to be used for the location of the marker

  return (
    <div className='Breakdown'>
      <div className='Type'>{props.char[0]}</div>
      <div className='Slider'></div>
      <div className='Marker' id={`${props.char[0]}Marker`} style={{gridColumn: '1/-1', gridRow: 2, width: typeRating}}>{'▼'}</div>
      <div className='TraitContainer'>
        {
          currentType.map((trait, i) => {
            col += 1;
            return (
              <div className='Trait' key={i} style={{
                  gridColumn: col,
                  // The below ternary conditionals determine where to place each trait within the breakdown component
                  // If there are only two traits, the traits are justified 'start' and 'end' respectively
                  // if there are three, they are justified 'start', 'center', and 'end' respectively
                  justifySelf: (currentType.length === 2) ? ((i === 0) ? 'start' : 'end') : ((i === 0) ? 'start' : (i === 2) ? 'end' : 'center')
              }}>{trait}</div>
            )
          })
        }
      </div>
    </div>
  );
};

Breakdown.propTypes = {
  char: PropTypes.array.isRequired
};

export default Breakdown;