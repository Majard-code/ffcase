import React from 'react';
import './select.scss';
import { connect } from 'react-redux';
import { setCategoryFilter } from '../../../store/reducers/filters';

function Select(props) {
  return (
    <div className="select filter">
      <p>КАТЕГОРИИ</p>
      <select size='1'
        name='Categories'
        value={props.categoryFilter}
        onChange={e => props.setCategoryFilter(+e.currentTarget.value)}>
        {props.categories.map((category, i) =>
          <option key={i} value={i}>{category}</option>
        )}
      </select>
    </div>
  );
}

export default connect(state => ({
  categories: state.filters.selectNames,
  categoryFilter: state.filters.filters.categoryFilter,
}), {
  setCategoryFilter,
})(Select);
