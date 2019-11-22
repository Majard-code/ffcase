const initState = {
  data: null,
  isReady: false,
  error: null,
}

export const FETCH_GOODS = 'FETCH_GOODS';
const FETCH_GOODS_SUCCESS = 'FETCH_GOODS_SUCCESS';
const FETCH_GOODS_FAILED = 'FETCH_GOODS_FAILED';
const DEL_GOOD = 'DEL_GOOD';

const instruments = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GOODS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isReady: true,
      };
    case FETCH_GOODS_FAILED:
      return {
        ...state,
        error: action.payload,
        isReady: false,
      };
      case DEL_GOOD:
        return {
          ...state,
          data: {
            ...state.data,
            data: state.data.data.filter(item => item.id !== action.payload),
          },
        };
    default:
      return state;
  }
}

export const fetchGoods = () => ({ type: FETCH_GOODS });
export const fetchGoodsSuccess = data => ({ type: FETCH_GOODS_SUCCESS, payload: data });
export const fetchGoodsFailed = err => ({ type: FETCH_GOODS_FAILED, payload: err });
export const delGood = id => ({ type: DEL_GOOD, payload: id });

export default instruments;