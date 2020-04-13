const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_CARS': {
      return {...state, cars: action.data}
    }
    default: {
      return {...state}
    }
  }
}

export default reducer