import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {

  return(
    <div className="keglist">
      {props.kegList.map((keg) =>
        <Keg
          name={keg.name}
          brewer={keg.brewer}
          description={keg.description}
          abv={keg.abv}
          price={keg.price}
          remaining={keg.remaining}
          key={keg.id}
          onSellPint={props.onSellPint}
          onSellGrowler={props.onSellGrowler}
          onSellGrowlerLarge={props.onSellGrowlerLarge}
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
