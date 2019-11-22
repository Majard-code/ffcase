import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import apis from '../apis/apis';
import { FETCH_GOODS, fetchGoodsSuccess, fetchGoodsFailed } from './reducers/app';

function* mamaSaga() {
  yield takeEvery(FETCH_GOODS, fetchGoods);
}

function* fetchGoods() {
  try {
    const data = yield call(() => axios.get(apis.goods).then(res => res.data));
    yield put(fetchGoodsSuccess(data));
  } catch (err) {
    yield put(fetchGoodsFailed(err));
  }
}

export default mamaSaga;