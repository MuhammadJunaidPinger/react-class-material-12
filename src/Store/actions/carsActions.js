import { firebase } from '../../Config/Api'

function getAllCars() {
  return (dispatch => {
    firebase.firestore().collection('cars').onSnapshot(docs => {
      let data = []
      docs.forEach(doc => {
        data.push(doc.data())
      })

      dispatch({
        type: 'UPDATE_CARS',
        data
      })
    })
  })
}

export { 
  getAllCars
}