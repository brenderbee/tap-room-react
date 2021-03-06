import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){

  function handleSendPint() {
    props.onSellPint(props.keg);
  }

  function handleSendGrowler() {
    props.onSellGrowler(props.keg);
  }

  function handleSendGrowlerLarge() {
    props.onSellGrowlerLarge(props.keg);
  }

  return (
    <div className="keg">
      <div className="keg-content">
        <div className="title">
          <h3>{props.keg.brewer}
            <span> {props.keg.name} </span>
            {props.keg.remaining < 10 && props.keg.remaining > 0 ? <span className="warning">(Low)</span> : null}
            {props.keg.remaining < 1 ? <span className="warning">(not available)</span> : null}
          </h3>

        </div>
        <div className="main-content">
          <div className="content-left">
            <p className="desc">{props.keg.description}</p>
            <p>ABV {props.keg.abv}%</p>
          </div>
          <div className="content-right">
            <div className="price">
              <p><strong>16oz</strong></p>
              <p>$ {props.keg.price.toFixed(2)}</p>
            </div>
            <div className="available">
              <p><strong>Available Pints</strong></p>
              <p>{props.keg.remaining}</p>
            </div>
            <div className="sell">
              {props.keg.remaining > 0 ? <button onClick={handleSendPint}>pint</button> : null}
              {props.keg.remaining > 1 ? <button onClick={handleSendGrowler}>growler 32oz</button> : null}
              {props.keg.remaining > 3 ? <button onClick={handleSendGrowlerLarge}>growler 64oz</button> : null}
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
            font-size: 1.6rem;
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

          .sell button {
            background:red;
            margin-right: 1rem;
            border: none;
            transition: background 0.3s ease;
          }

          .sell button:first-child {
            background: #8256fd;
            border-radius: 10px;
          }

          .sell button:nth-child(2) {
            background: #da1ec8;
            border-radius: 10px;
          }

          .sell button:nth-child(3) {
            background: #e85151;
            border-radius: 10px;
          }

          .sell button:first-child:hover {
            background: green;
            cursor: pointer;
          }

          .sell button:nth-child(2):hover {
            background: green;
            cursor: pointer;
          }

          .sell button:nth-child(3):hover {
            background: green;
            cursor: pointer;
          }

          span.warning {
            font-size: 1.2rem;
          }
          `}
      </style>
    </div>
  );
}

Keg.propTypes = {
  onSellPint: PropTypes.func,
  onSellGrowler: PropTypes.func,
  onSellGrowlerLarge: PropTypes.func,
  keg: PropTypes.object
};

export default Keg;
