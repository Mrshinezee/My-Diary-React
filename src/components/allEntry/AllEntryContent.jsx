import React, { Component, Fragment } from 'react';
import swal from 'sweetalert';
import PropTypes from 'prop-types';

// component
import EntryModal from '../reusables/EntryModal';

/**
 * @class EntryForm
 * @extends {Component}
 * @param {event} event
 */
class AllEntryPage extends Component {
    modelDelete= (event) => {
        const { currentTarget: { value: entryid } } = event;
        // const { 
        //   deleteUserRequest,
        //   history,
        //   fetchUserRequests
        // } = this.props;
    
        swal({
          title: "Are you sure?",
          text: "If you click 'OK', this entry will be removed from your diary",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((remove) => {
          if (remove) {
            this.props.deleteEntry(entryid);
            // history.push('/requests');
            this.props.pullEntries();
          }
        });
      }
   

    render() {
        const { entries } = this.props
        if (entries && entries.loading) {
            return (
                <div className='loading-spinner'>
                    <i className='fa fa-3x fa-spinner fa-spin' />
                </div>
            )
        }

        const { entries: { entry, message } } = entries;
        return (
            <Fragment>
                <div id="entryHeader">
                    <div id="topic">
                        <div className="logo_sub" >ENTRIES</div>
                        <p id="allMessage">{!message ? 'Yet to create Entry' : message}</p>
                    </div>
                </div>
                <div className="table-body">
                    <table id="entriesTable">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Title</th>
                                <th scope="col">Action Type</th>
                            </tr>
                        </thead>

                        <tbody id="table-body">
                            {entry && entry.map(request => {
                                const { entryid, entrytitle, entrydate } = request;
                                return (
                                    <tr key={entryid}>
                                        <td data-label="Date">{entrydate}</td>
                                        <td data-label="Title">{entrytitle}</td>
                                        <td data-label="Action">
                                            {/* <Link className="btn btn-details" to={`/request/${entryid}`}> details </Link> */}
                                            <EntryModal id={ entryid } updateEntry={this.props.updateEntry} 
                                            singleEntry={this.props.singleEntry} entry={this.props.entry} />
                                            {/* <div className="view" onClick="" ></div> */}
                                            <button className="delete" onClick={ this.modelDelete } value={ entryid } ></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </Fragment>
        );
    }
}

AllEntryPage.propTypes = {
    pullEntries: PropTypes.func,
    deleteEntry: PropTypes.func,
    updateEntry: PropTypes.func,
    singleEntry: PropTypes.func,
    entry: PropTypes.object,
    entries: PropTypes.object,
};
export default AllEntryPage;