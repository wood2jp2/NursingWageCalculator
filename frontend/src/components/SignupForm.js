import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SignupForm extends Component {
    state = {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
        validForm: false
    }

    checkForFormValidity = () => {
        const passwordsMatch = this.state.password === this.state.confirmPassword
        const emailIsValid = this.state.email.split('@').length === 2
        const noBlanks = !Object.values(this.state).includes('')

        if (passwordsMatch && emailIsValid && noBlanks) {
            this.setState({ validForm: true })
        }
        else {
            this.setState({ validForm: false })
        }
    }

    handleChange = ({ target }) => {
        const name = target.name
        const value = target.value

        this.setState( prevState => {
            const newState = { ...prevState }
            newState[name] = value.trim()

            return newState
        })

        this.checkForFormValidity()
    }

    render() {
        const passwordsMatchWarning = <p>Warning: the passwords you've chosen do not match!</p>
        

        return (
            <div>
                <form onSubmit={ e => this.props.handleSignup(e, this.state)}>
                <h4>Sign Up - Please fill out all fields!</h4>
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
                    type="email"
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
                <input type="submit" disabled={!this.state.validForm}></input>
                </form>
                <div className="formMessages">
                    {
                        (this.state.password || this.state.confirmPassword) && (this.state.confirmPassword !== this.state.password) && passwordsMatchWarning
                    }
                </div>
            </div>
        )
    }
}

export default SignupForm

SignupForm.propTypes = {
    handleSignup: PropTypes.func.isRequired
}