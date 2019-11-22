const initState = {
  filters: {
    priceFilter: 0,
    categoryFilter: 0,
    availabilityFilter: false,
  },
  radiosNames: ['Все', '< 5 000', '>= 5 000'],
  selectNames: ['Все категории', 'Category 1', 'Category 2', 'Category 3', 'Category 4'],
}

const SET_PRICE_FILTER = 'SET_PRICE_FILTER';
const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
const SET_AVAILABILITY_FILTER = 'SET_AVAILABILITY_FILTER';

const filters = (state = initState, action) => {
  switch (action.type) {
    case SET_PRICE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          priceFilter: action.payload,
        },
      };
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          categoryFilter: action.payload,
        },
      };
    case SET_AVAILABILITY_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          availabilityFilter: state.filters.availabilityFilter ? false : true,
        }
      }
    default:
      return state;
  }
}

export const setPriceFilter = price => ({ type: SET_PRICE_FILTER, payload: price });
export const setCategoryFilter = category => ({ type: SET_CATEGORY_FILTER, payload: category });
export const setAvailabilityFilter = () => ({ type: SET_AVAILABILITY_FILTER });

export default filters;