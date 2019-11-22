import React from 'react';
import { connect } from 'react-redux';
import './cards.scss';
import Card from './card/card';
import filtration from '../../utils/filtration';

function Cards(props) {
  return (
    <div className="cards">
      {filtration(props.goodsData, props.filters).map(good => <Card good={good} key={good.id} />)}
    </div>
  );
}

export default connect(state => ({
    goodsData: state.app.data.data,
    filters: state.filters.filters,
  }))(Cards);
