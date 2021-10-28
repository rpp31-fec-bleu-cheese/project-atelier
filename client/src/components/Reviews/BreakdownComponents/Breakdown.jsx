import React from 'React';
import PropTypes from 'prop-types';

const Breakdown = props => {
  let type = {
    Quality: ['Poor', 'Great']
  };
  let currentType = type[props.char[0]];
  let col = 0;

  return (
    <div className='Breakdown'>
      <div className='Type'>Quality</div>
      <div className='Slider'></div>
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