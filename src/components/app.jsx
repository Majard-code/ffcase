import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './app.scss';
import { fetchGoods } from '../store/reducers/app';
import Filters from './filters/filters';
import Cards from './cards/cards';
import Preloader from './preloader/preloader';

function App(props) {

  const { isReady, fetchGoods } = props;

  useEffect(() => {
    if (!isReady) fetchGoods();
  }, [isReady, fetchGoods]);

  if (!isReady) {
    return (
      <div className="app">
        <Preloader />
      </div>
    );
  } else {
    return (
      <div className="app">
        <Filters />
        <Cards />
      </div>
    );
  }
}

export default connect(state => ({
  isReady: state.app.isReady,
}), {
  fetchGoods,
})(App);
