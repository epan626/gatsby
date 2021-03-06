import React, { Component } from "react"
import injectSheet from "react-jss"

class Forms extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    description: "",
  }
  render() {
    return (
      <div className={this.props.classes.formsContainer}>
        <form>
          <input
            onChange={e => this.oninputchange(e, "firstName")}
            value={this.state.firstName}
          />
          <input
            onChange={e => this.oninputchange(e, "lastName")}
            value={this.state.lastName}
          />
          <input
            onChange={e => this.oninputchange(e, "email")}
            value={this.state.email}
          />
          <input
            onChange={e => this.oninputchange(e, "phoneNumber")}
            value={this.state.phoneNumber}
          />
          <textarea
            onChange={e => this.oninputchange(e, "description")}
            value={this.state.description}
          />
          <button onClick={this.submitMe}> Submit </button>
        </form>
      </div>
    )
  }

  oninputchange = (e, x) => {
    console.log(e.target.value)
    this.setState({
      [x]: e.target.value,
    })
  }
  submitMe = e => {
    e.preventDefault()
    console.log(this.state)
  }
}
const styles = {
  formsContainer: {
    border: "5px solid black",
  },
}
export default injectSheet(styles)(Forms)
