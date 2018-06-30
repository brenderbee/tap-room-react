import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div className="keg">
      <div className="keg-content">
        <div className="content-left">
          <h3>{props.brewer} - {props.name}</h3>
          <p>{props.description}</p>
          <p>{props.abv}</p>
        </div>
        <div className="content-right">
          <p>16oz</p>
          <p>$ {props.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
};

export default Keg;
