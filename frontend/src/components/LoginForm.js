import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        validForm: false
    }

    checkForFormValidity = () => {
        // if the username is blank OR the password is blank
        const checkForBlanks = !this.state.username || !this.state.password

        if (checkForBlanks) {
            this.setState({ validForm: false })
        }
        else {
            this.setState({ validForm: true })
        }
    }

    handleChange = ({ target }) => {
        const name = target.name
        const value = target.value

        this.setState( prevState => {
            const newState = { ...prevState }
            newState[name] = value

            return newState
        })

        this.checkForFormValidity()
    }

    render() {
        console.log('re-rendered')
        return (
            <div>
                <form onSubmit={ e => this.props.handleLogin(e, this.state)}>
                    <h4>Log In</h4>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    ></input>
                    <input disabled={!this.state.validForm} type="submit"></input>
                </form>
            </div>
        )
    }
}

export default LoginForm

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired
}