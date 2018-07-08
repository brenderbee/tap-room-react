import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {

  return(
    <div className="keglist">
      {props.kegList.map((keg, index) =>
        <Keg
          onSellPint={props.onSellPint}
          onSellGrowler={props.onSellGrowler}
          onSellGrowlerLarge={props.onSellGrowlerLarge}
          key={index}
          keg={keg}/>
      )}
      <style jsx>
        {`
          .keglist {
            border: 2px solid white;
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
}

KegList.propTypes = {
  onSellPint: PropTypes.func,
  onSellGrowler: PropTypes.func,
  onSellGrowlerLarge: PropTypes.func,
  kegList: PropTypes.array
};

export default KegList;
