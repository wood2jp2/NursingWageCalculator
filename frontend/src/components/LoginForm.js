import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
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
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    ></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default LoginForm

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired
}