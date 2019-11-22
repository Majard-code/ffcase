import React from 'react';
import './radioGroup.scss';
import { connect } from 'react-redux';
import { setPriceFilter } from '../../../store/reducers/filters';

function RadioGroup(props) {
  return (
    <div className="radioGroup filter">
      <p>ЦЕНЫ</p>
      {props.radios.map((radio, i) => 
      <label key={i}>
        <input type='radio'
        name='priceFilter'
        value={i}
        checked={i === props.priceFilter}
        onChange={() => props.setPriceFilter(i)} />
        {` ${radio}`}
      </label>
      )}
    </div>
  );
}

export default connect(state => ({
  radios: state.filters.radiosNames,
  priceFilter: state.filters.filters.priceFilter,
}), {
  setPriceFilter,
})(RadioGroup);