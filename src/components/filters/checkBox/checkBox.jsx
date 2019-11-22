import React from 'react';
import './checkBox.scss';
import { connect } from 'react-redux';
import { setAvailabilityFilter } from '../../../store/reducers/filters';

function CheckBox(props) {
  return (
    <div className="checkBox filter">
      <p>НАЛИЧИЕ ТОВАРА</p>
      <label>
        <input type='checkbox'
        checked={props.availabilityFilter}
        onChange={props.setAvailabilityFilter} />
        {` В наличии`}
      </label>
    </div>
  );
}

export default connect(state => ({
  availabilityFilter: state.filters.filters.availabilityFilter,  
}), {
  setAvailabilityFilter,
})(CheckBox);
