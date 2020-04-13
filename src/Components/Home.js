import React from 'react'
import { withRouter } from 'react-router-dom'
import { getAllPostsFromApi, facebookLogin, firebase } from '../Config/Api'
import { updateUser } from '../Store/actions/userActions'
import { getAllCars } from '../Store/actions/carsActions'
import { connect } from 'react-redux'

class Home extends React.Component {
  state = {
    data: [],
    user: {}
  }

  componentDidMount() {
    this.getAllPosts()
  }

  async loginWithFacebook() {
    const user = await facebookLogin()
    this.props.updateTheUser(user)
    this.setState({ user })
  }

  async getAllPosts() {
    this.props.getAllCars()
  }

  // goToAddEmployees() {
  //   this.props.history.push('/addEmployees')
  // }

  goToDetails(id) {
    console.log('id--->')
    console.log(id)
    this.props.history.push(`/details/${id}`)
  }

  render() {
    const { data, user } = this.state

    return (
      <div>
        User logged In: {user.displayName}
        <h1>Home</h1>
        <button onClick={this.loginWithFacebook.bind(this)}>Facebook Login</button>

        {/* <button onClick={this.goToAddEmployees.bind(this)}>Go to Add Employees</button> */}
        {data.map((item, index) => {
          return <p>{index + 1}) {item.name}</p>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state from HOME Component', state)
  return {
    // user: state.user,
    // cars: state.cars
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTheUser: (user) => dispatch(updateUser(user)),
    getAllCars: () => dispatch(getAllCars())
  }
}
//mapDispatchToProps me jo bhi cheez return hogi wo
//component ke this.props me milegi

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
