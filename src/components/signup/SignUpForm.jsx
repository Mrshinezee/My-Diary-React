// react libraries
import React, { Component, Fragment } from 'react';


// components

/**
 * @param {func} event
 * @desc renders login form
 * @class LoginForm
 * @extends {Component}
 */
class SignUpForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('register', this.state);
        const { props } = this;
        props.register(this.state);
    }

    render() {
        // const { props } = this;
        // if (props.auth.isAuth === true) {
        //   return (
        //         <Redirect to='/'/>
        //   );
        // }
        return (
            <Fragment>
                <div id="authform">
                    <form onSubmit={this.onSubmit}>
                        <div className="centring-div">
                            <h4>CREATE YOUR ACCOUNT</h4>
                            <p id="registerMessage"></p>
                            <p id="registerSuccess"></p>
                        </div>
                        <p>
                            <label htmlFor="firstname"> First name </label>
                            <input type="text" id="firstname" name="firstName" value={this.state.firstName}
                            onChange={this.onChange} required />
                        </p>
                        <p id="firstnameError" className="alert-class" />
                        <p>
                            <label htmlFor="lastname"> Last name </label>
                            <input type="text" id="lastname" name="lastName" value={this.state.lastName}
                            onChange={this.onChange} required />
                        </p>
                        <p id="lastnameError" className="alert-class"></p>
                        <p>
                            <label htmlFor="email"> Email </label>
                            <input type="email" id="email" name="email" value={this.state.email}
                            onChange={this.onChange} required />
                        </p>
                        <p id="emailError" className="alert-class" />
                        <p>
                            <label htmlFor="password" > Password </label>
                            <input type="password" id="password" name="password" value={this.state.password}
                             onChange={this.onChange} required />
                        </p>
                        <p id="passwordError" className="alert-class" />
                        <p>
                            <label htmlFor="confirmpassword" >Confirmed Password </label>
                            <input type="password" id="confirmpassword" required />
                        </p>
                        <p id="confirmpassword-alert" className="alert-class" />
                        <p className="sign-up">
                        <button type="submit" id="authUser" >Sign Up</button>
                        </p>

                    </form>
                </div>
            </Fragment>
        );
    }
}

export default SignUpForm;
