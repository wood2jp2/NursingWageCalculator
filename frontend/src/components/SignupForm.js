import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SignupForm extends Component {
    state = {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleChange = ({ target }) => {
        const name = target.name
        const value = target.value

        this.setState( prevState => {
            const newState = { ...prevState }
            newState[name] = value

            return newState
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={ e => this.props.handleSignup(e, this.state)}>
                <h4>Sign Up</h4>
                <label htmlFor="first_name">First Name</label>
                <input
                    type="text"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                ></input>
                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.handleChange}
                ></input>
                <label htmlFor="email">Email Address</label>
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                ></input>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                ></input>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                ></input>
                <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default SignupForm

SignupForm.propTypes = {
    handleSignup: PropTypes.func.isRequired
}