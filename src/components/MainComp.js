import React, { Component } from 'react'
import Button from './Button'

let api = `https://random-data-api.com/api/v2/users`

class MainComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {

    async function FetchApi() {
        let request = await(fetch(api))
        let ans = await(request)
        return ans.json()
    }
    FetchApi().then((data)=>{
        this.setState({
            user: data.id,
            first_name: data.first_name,
            last_name: data.first_name,
            username: data.username,
            email: data.email,
            avatar: data.avatar,
            gender: data.gender,
            phone_number: data.phone_number,
            date_of_birth: data.date_of_birth
        })
    })
  }
  changeApiOnClick = ()=> {
    this.componentDidMount()
  }
  render() {
    return (
      <>
        <div className='card'>
            <img src={this.state.avatar}></img>
            <p>Id number: {this.state.user}</p>
            <p>First Name: {this.state.first_name}</p>
            <p>Last Name: {this.state.last_name}</p>
            <p>Username: {this.state.username}</p>
            <p>Email: {this.state.email}</p>
            <p>Gender: {this.state.gender}</p>
            <p>Number: {this.state.phone_number}</p>
            <p>Date of Birth: {this.state.date_of_birth}</p>
        </div>
        <Button clickPropFunc={this.changeApiOnClick} />
      </>
    )
  }
}

export default MainComp