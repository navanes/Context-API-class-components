import React, {Component} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext";

class ThemeToggle extends Component {
    // static contextType = ThemeContext
    render() {

        return (
            <AuthContext.Consumer>{(authContext) => {
                return(
                    <ThemeContext.Consumer>{(themeContext) => {
                        const {isAuthenticated} = authContext
                        const {toggleTheme} = themeContext
                        return(
                            <button disabled={!isAuthenticated} onClick={toggleTheme}>Toggle Theme</button>
                        )
                    }}
                    </ThemeContext.Consumer>
                )
            }}

            </AuthContext.Consumer>
        );
    }
}

export default ThemeToggle;