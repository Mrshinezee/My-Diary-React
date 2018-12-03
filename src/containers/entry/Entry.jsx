// third-party libraries
import { connect } from 'react-redux';

// components
import EntryPage from '../../components/entry/EntryPage';

// action
import { createEntry, clearEntry } from '../../action/entry';


const mapDispatchToProps = dispatch => ({
  makeEntry: detail => dispatch(createEntry(detail)),
  clearEntry: () => dispatch(clearEntry())
});
const mapStateToProps = state => ({
  auth: state.auth,
  createEntry: state.entry
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryPage);