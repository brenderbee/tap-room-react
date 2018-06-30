import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div className="keg">
      <div className="keg-content">
        <div className="title">
          <h3>{props.brewer} <span>{props.name}</span></h3>
        </div>
        <div className="main-content">
          <div className="content-left">
            <p className="desc">{props.description}</p>
            <p>ABV {props.abv}</p>
          </div>
          <div className="content-right">
            <div>
              <p><strong>16oz</strong></p>
              <p>$ {props.price.toFixed(2)}</p>
            </div>
            <div>
              <p><strong>Available Pints</strong></p>
              <p>{props.remaining}</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .keg {
            border-bottom: 2px solid white;
          }

          .keg:last-child {
            border-bottom: none;
          }

          .keg-content {
            display: flex;
            flex-direction: column;
            padding: 1.2rem;
          }

          .keg-content h3 {
            font-size: 2rem;
            margin: 0;
            text-transform: uppercase;
          }

          .keg-content span {
            color: #ff9100;
          }

          .main-content {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }

          .desc {
          color: #b3b3b3;
          }

          .content-right {
            display: flex;
            text-align: center;
          }

          .content-right div {
            margin-left: 1.6rem;
          }
          `}
      </style>
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
