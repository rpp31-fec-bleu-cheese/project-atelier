import React from 'react';
import PropTypes from 'prop-types';

var Comparison = (props) => {
  if(props.popup) {
    return(
      <div  id="PopupTrue" style={props.popup_style}>
      Comparing
        <table id="ComparingTable">
          <thead>
          <tr>
            <td><em>Product Short Name</em></td>
             <td> </td>
             <td><em>Product Short Name</em></td>
          </tr>
          </thead>
          <tbody>
          <tr>
           <td>
            <i className="fas fa-check"></i>
           </td>
           <td>
              GMO and Pesticide-free
           </td>
           <td>
            <i className="fas fa-check"></i>
           </td>
          </tr>
           <tr>
           <td>
            <i className="fas fa-check"></i>
           </td>
           <td>
              GMO and Pesticide-free
           </td>
           <td>
            <i className="fas fa-check"></i>
           </td>
          </tr>
           <tr>
           <td>
            <i className="fas fa-check"></i>
           </td>
           <td>
              GMO and Pesticide-free
           </td>
           <td>
            <i className="fas fa-check"></i>
           </td>
          </tr>
           <tr>
           <td>
            <i className="fas fa-check"></i>
           </td>
           <td>
              Made with 100% Genetic-modification
           </td>
           <td>
            <i className="fas fa-check"></i>
           </td>
          </tr>
           <tr>
           <td>
            <i className="fas fa-check"></i>
           </td>
           <td>
              This is made up
           </td>
           <td>
            <i className="fas fa-check"></i>
           </td>
          </tr>
          <tr>
           <td>
            <i className="fas fa-check"></i>
           </td>
           <td>
              it doesnt matter
           </td>
           <td>
            <i className="fas fa-check"></i>
           </td>
          </tr>
          <tr>
           <td>
            <i className="fas fa-check"></i>
           </td>
           <td>
              Feature Description
           </td>
           <td>
            <i className="fas fa-check"></i>
           </td>
          </tr>
          <tr>
           <td>
            <i className="fas fa-check"></i>
           </td>
           <td>
              Uses React Hooks and Redux
           </td>
           <td>
            <i className="fas fa-check"></i>
           </td>
          </tr>
          <tr>
           <td>
            <i className="fas fa-check"></i>
           </td>
           <td>
              Angular
           </td>
           <td>
            <i className="fas fa-check"></i>
           </td>
          </tr>
          <tr>
           <td>
            <i className="fas fa-check"></i>
           </td>
           <td>
              Some other product comparison metric
           </td>
           <td>
            <i className="fas fa-check"></i>
           </td>
          </tr>
          </tbody>
        </table>

      </div>
    )
  }else {
     return (
      <div id="PopupFalse"></div>
     );
  }

}
Comparison.propTypes = {
  popup:PropTypes.boolean,
  popup_style:PropTypes.object

}
export default Comparison;