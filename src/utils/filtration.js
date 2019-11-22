const filtration = (data, filters) => {
  data = pricePartFilter(data, filters.priceFilter);
  data = categoryPartFilter(data, filters.categoryFilter);
  data = availabilityPartFilter(data, filters.availabilityFilter);
  return data;
}

const pricePartFilter = (data, priceFilter) => {
  switch (priceFilter) {
    case 1:
      return data.filter(item => item.price < 5000);
    case 2:
      return data.filter(item => item.price >= 5000);
    default:
      return data;
  }
}

const categoryPartFilter = (data, categoryFilter) => {
  if (categoryFilter > 0) {
    return data.filter(item => item.category.id === categoryFilter);
  } else {
    return data;
  }
}

const availabilityPartFilter = (data, availabilityFilter) => {
  if (availabilityFilter){
    return data.filter(item => item.quantity > 0);
  } else {
    return data;
  }
}

export default filtration;