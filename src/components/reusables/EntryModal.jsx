// react libraries
import React, { Component, Fragment } from 'react';


// third-party libraries
import PropTypes from 'prop-types';
import Modal from 'react-modal';

// style
import 'react-toastify/dist/ReactToastify.min.css';


// components
// import Button from '../reusables/button/Button';
/**
* @export
* @class CommentReply
* @param {object} event
* @extends Component
*/
export default class Report extends Component {

    state = {
        isModalOpen: false,
        entrytitle: '',
        entrycontent: ''
    };
    
      onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        const {entrytitle, entrycontent} = this.state;
        const { id } = this.props;
        const update = {
            entrytitle,
            entrycontent  
        }
        const { updateEntry } = this.props;
        updateEntry(update, id);
      }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        });
        const { id, singleEntry} = this.props;
        singleEntry(id)
        .then(ent => {
            this.setState({
                entrytitle: ent.entry[0].entrytitle,
                entrycontent: ent.entry[0].entrycontent,
            });
        })
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });

    };

    handleShowEditor = () => {
        const { showEditor } = this.state;
        this.setState({
            showEditor: !showEditor,
        });
    };

    modalStyles = () => ({
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            border: '1px',
            padding: '10px',
            marginRight: '-50%',
            width: '40%',
            transform: 'translate(-50%, -50%)',
        },
    });


    render() {
        console.log('modelprops', this.props);
        return (
            <Fragment>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={this.modalStyles()}>
                    <form onSubmit={this.onSubmit}>
                    <div className='main-comment'>
                        <div className='comment-log'>
                            <p>Entry Title</p>
                            <div className='comment-input'>
                                 <input type="text" id="entryTopic" name="entrytitle" placeholder="Entry Tiltle" value={this.state.entrytitle}
                                onChange={this.onChange} />
                            </div>
                            <div className='comment-body'>
                                <p>Entry Content</p>
                                <div className='comment-input'>
                                    <textarea name="entrycontent" id="content" cols="10" rows="10" value={this.state.entrycontent}
                                    onChange={this.onChange}/>
                                </div>
                                <div className='comment-reaction'>
                                    <button className='btn' type="submit" id="proceed">
                                        Update Entry
                                    </button>
                                    <button className='btn' id="close" onClick={this.closeModal}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </Modal>
                <button className="view" onClick={this.openModal} ></button>
            </Fragment>
        );
    }
}
Report.propTypes = {
    updateEntry: PropTypes.func,
    id: PropTypes.number,
    singleEntry: PropTypes.func,
    entry: PropTypes.object,
};
