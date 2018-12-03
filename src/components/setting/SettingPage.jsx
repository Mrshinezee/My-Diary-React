// react libraries
import React, { Component, Fragment } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

/**
 * @class EntryPage
 * @extends {Component}
 */
class SettingPage extends Component {
    render() {
        const { auth:{ user}, entries} = this.props;
        const settingUser = JSON.parse(user);
        console.log(entries);
        return (
            <Fragment>
                <div className="menu-links">
                    <div id="menu-links-left">
                        <span><a href="index.html">MY-DIARY</a></span>
                    </div>

                    <div className="menu-icon">
                        <label htmlFor="menu-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <input type="checkbox" id="menu-check" />
                    <div className="menu-links-right">
                        <a href="/entry"><i className="fa fa-plus"></i> Create Entry</a>
                        <a href="/allEntry"><i className="fa fa-book"></i> Entries</a>
                        <a href="/Logout"><i className="fa fa-sign-out"></i> Logout</a>
                    </div>
                </div>

                <div id="main">
                    <div className="containerDiv">
                        <div id="settingDiv">
                            <div id="notDiv">
                                <form className="account">
                                    <p >
                                        <span ><h1 className="accountFormHeader">Account Settings</h1></span>
                                    </p>
                                    <div id="counter">
                                        <h2 id="entryCount"> </h2>
                                        <p >Created</p>

                                    </div>

                                    <p>
                                        <input type="checkbox" /> Get daily notification<br />
                                    </p>
                                    <p>
                                        <input type="checkbox" /> Get update Information<br />
                                    </p>
                                </form>
                            </div>

                            <div id="profileDiv">
                                <form className="account">
                                    <p >
                                        <span> <h1 className="accountFormHeader">Account Information</h1></span>
                                    </p>

                                    <p>
                                        <span><label htmlFor="email">Email</label></span>
                                        <input type="email" id="email" name="email" value={settingUser[0].email} readOnly />
                                    </p>
                                    <p>
                                        <span><label htmlFor="firstname">Firstname</label></span>
                                        <input type="text" id="firstname" name="firstname" value={settingUser[0].firstname} readOnly />
                                    </p>
                                    <p>
                                        <span><label htmlFor="lastname">Lastname</label></span>
                                        <input type="text" id="lastname" name="lastname" value={settingUser[0].lastname} readOnly />
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <footer>
                <p>My-Diary, Copyright &copy; 2018 </p>
            </footer>
            </Fragment >
                    );
    }
}
SettingPage.propTypes = {
    entries: PropTypes.array,
    auth: PropTypes.object
};
export default SettingPage;
