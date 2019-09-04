import React from 'react'
import PropTypes from 'prop-types'

const Nav = props => {
    const loggedOutNav = (
        <div>
            <ul>
                <li onClick={() => props.displayForm('login')}>login</li>
                <li onClick={() => props.displayForm('signup')}>signup</li>
            </ul>
        </div>
    )
    const loggedInNav = (
        <div>
            <ul>
                <li onClick={props.handleLogout}>logout</li>
            </ul>
        </div>
    )

    return <div>{props.loggedIn ? loggedInNav : loggedOutNav}</div>
}

export default Nav

Nav.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    displayForm: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
}