import React from 'react';
import './card.scss';
import thousands from '../../../utils/thousands';
import { connect } from 'react-redux';
import { delGood } from '../../../store/reducers/app';

function Card(props) {
  return (
    <div className="card" onClick={() => props.delGood(props.good.id) }>
      <img src={props.good.image} alt={props.good.title} />
      <h2>{props.good.title}</h2>
      {props.good.category.id ? <p>{props.good.category.title}</p> : <p>Без категории</p>}
      <p>Цена: {thousands(props.good.price)} &#8381;</p>
    </div>
  );
}

export default connect(null, {
  delGood,
})(Card);