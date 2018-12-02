// third-party libraries
import { connect } from 'react-redux';

// components
import AllEntryPage from '../../components/allEntry/AllEntryPage';

// action
import getUserEntries from '../../action/entries';
import { deleteEntry, updateEntry, getEntry } from '../../action/entry';


const mapDispatchToProps = dispatch => ({
  deleteEntry: id => dispatch(deleteEntry(id)),
  pullEntries: (token) => dispatch(getUserEntries(token)),
  updateEntry: (update, id) => dispatch(updateEntry(update, id)),
  singleEntry: id => dispatch(getEntry(id)),

});

const mapStateToProps = state => ({
  entries: state.entries,
  auth: state.auth,
  entry: state.entry,
});

export default connect(mapStateToProps, mapDispatchToProps)(AllEntryPage);