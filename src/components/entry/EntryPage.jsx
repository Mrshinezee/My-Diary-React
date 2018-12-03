// react libraries
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

// style
import 'react-toastify/dist/ReactToastify.min.css';

/**
 * @class EntryPage
 * @extends {Component}
 * @param {event} event
 */
class EntryPage extends Component {
    state = {
        entrytitle: '',
        entrycontent: ''
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { makeEntry } = this.props;
        makeEntry(this.state);
    }

    notify = () => {
        const {entry: {message} } = this.props.createEntry;
       toast(message);
       this.props.clearEntry();
    }

    render() {
        return (
            <Fragment>
                <div className="menu-links">
                    <div id="menu-links-left">
                        <span><a href="/">MY-DIARY</a></span>
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
                        <a href="/allEntry"><i className="fa fa-book"></i> Entries</a>
                        <a href="/setting"><i className="fa fa-user"></i> <span id='diaryName'></span> </a>
                        <a href="/Logout"><i className="fa fa-sign-out"></i> Logout</a>
                    </div>
                </div>

                
                <div id="main">
                    <div id="entryHeader">
                        <div className="logo_sub" > NEW ENTRY</div>
                    </div>
                </div>
                <div className="container">
                    <div id="dailyEntry" >
                        <form onSubmit={this.onSubmit}>
                            <p id="today"/> 
                    {!this.props.createEntry.entry.message
                     ? null
                     : this.notify() } 
                    <ToastContainer />
                            <p>
                                <span><label htmlFor="topic">Title</label></span>
                                <input type="text" id="entryTopic" name="entrytitle" placeholder="Entry Tiltle" value={this.state.entrytitle}
                                    onChange={this.onChange} />
                            </p>
                            <p>
                                <div><label htmlFor="content">Entry</label></div>
                                <textarea name="entrycontent" id="content" cols="30" rows="10" value={this.state.entrycontent}
                                    onChange={this.onChange} />
                            </p>
                            <button type="submit" id="submitEntry">Save</button>
                        </form>
                    </div>
                </div>
                <footer>
                    <p>My-Diary, Copyright &copy; 2018 </p>
                </footer>
            </Fragment >
        );
    }
}
EntryPage.propTypes = {
    makeEntry: PropTypes.func,
    clearEntry: PropTypes.func,
    createEntry: PropTypes.object,
};

export default EntryPage;