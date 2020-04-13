const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_USER': {
      return {...state, user: action.user, isLoggedIn: true}
    }
    case 'DELETE_USER': {
      return {...state, user: null}
    }
    default: {
      return {...state}
    }
  }
}

export default reducer