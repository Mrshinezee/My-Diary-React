// react libraries
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// component
import AllEntryContent from './AllEntryContent';

/**
 * @class EntryPage
 * @extends {Component}
 */
class AllEntryPage extends Component {
    componentDidMount() {
        const { pullEntries, auth: { token }} = this.props
        pullEntries(token);
    }

    // componentWillReceiveProps(nextProps) {
    //     nextProps.pullEntries()
    //     //   this.props.history.push('/requests');
        
    //   }

    render() {
        const { entries, entry, pullEntries, deleteEntry, updateEntry, singleEntry } = this.props;
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
                        <a href="entry"><i className="fa fa-plus"></i> Create Entry</a>
                        <a href="setting"><i className="fa fa-user"></i> <span id='diaryName'></span> </a>
                        <a href="Logout"><i className="fa fa-sign-out"></i> Logout</a>
                    </div>
                </div>
                <div id="main">
                    <AllEntryContent entries={entries} pullEntries={pullEntries} deleteEntry={deleteEntry}
                    updateEntry={updateEntry} singleEntry={singleEntry} entry={entry}/>
                </div>
                <footer>
                    <p>My-Diary, Copyright &copy; 2018 </p>
                </footer>

            </Fragment>
        );
    }
}

AllEntryPage.propTypes = {
    pullEntries: PropTypes.func.isRequired,
    deleteEntry: PropTypes.func,
    updateEntry: PropTypes.func,
    singleEntry: PropTypes.func,
    entries: PropTypes.object,
    auth: PropTypes.object,
    entry: PropTypes.object,
};

export default AllEntryPage;