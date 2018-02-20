import React, {Component} from 'react';
import {fetchComments, fetchDeleteComment, fetchEditComment, fetchVoteOnComment} from "../actions";
import {timestampToDate} from "../utils/helper";
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import NewComment from "./NewComment";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Modal from "react-modal";

class Comments extends Component {
    state = {
        editModalOpen: false,
        editComment: null
    }

    componentDidMount() {
        Modal.setAppElement('body');
        this.props.dispatch(fetchComments(this.props.postId))
    }

    saveEdit = (e) => {
        e.preventDefault()

        const {editComment} = this.state;
        const newBody = this.editBodyInput.value;

        this.props.dispatch(fetchEditComment(editComment.id, Date.now(), newBody)).then(() => this.closeEditModal());
    }

    openEditModal = (comment) => {
        this.setState(() => ({editModalOpen: true, editComment: comment}))
    }

    closeEditModal = () => this.setState(() => ({editModalOpen: false, editComment: null}))

    vote(commentId, voteType) {
        this.props.dispatch(fetchVoteOnComment(commentId, voteType));
    }

    deleteComment = (comment) => {
        this.props.dispatch(fetchDeleteComment(comment));
    }

    render() {
        const {comments} = this.props;
        const {editModalOpen, editComment} = this.state;

        return (
            <div className="container">
                <NewComment postId={this.props.postId}/>
                {comments && comments.map(c => (
                    <div key={c.id} className="row comment">
                        <div className="col-1 text-center">
                            <button className="icon-btn" onClick={() => this.vote(c.id, 'upVote')}>
                                <FaArrowUp/>
                            </button>
                            <h2 className="vote-score">{c.voteScore}</h2>
                            <button className="icon-btn" onClick={() => this.vote(c.id, 'downVote')}>
                                <FaArrowDown/>
                            </button>
                        </div>
                        <div className="col">
                            <div><b>{c.author}</b> posted on <b>{timestampToDate(c.timestamp)}</b></div>
                            <div>
                                <pre>
                                    {c.body}
                                </pre>
                            </div>
                            <div>
                                <button className="btn btn-primary btn-sm" onClick={() => this.openEditModal(c)}>edit</button> | {/*space*/}
                                <button className="btn btn-danger btn-sm" onClick={() => this.deleteComment(c)}>delete</button> | {/*space*/}
                            </div>
                        </div>
                    </div>
                ))}

                <Modal
                    className='modalz edit-post-modal'
                    overlayClassName='overlay'
                    isOpen={editModalOpen}
                    onRequestClose={this.closeEditModal}
                    contentLabel='Modal'>
                    {editModalOpen && editComment &&
                    <div>
                        <h1>EDIT POST</h1>
                        <div>
                            <h3>Edit body:</h3>
                            <textarea defaultValue={editComment.body} ref={(input) => this.editBodyInput = input} rows="4" style={{width: '100%'}}/>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={this.saveEdit}>SAVE</button>
                            <button className="btn btn-danger" onClick={this.closeEditModal}>CANCEL</button>
                        </div>
                    </div>
                    }
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments.filter(c => !c.deleted)
    }
}

export default withRouter(connect(mapStateToProps)(Comments));