import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import {fetchVoteOnPost, fetchEditPost} from "../actions";
import {timestampToDate} from "../utils/helper";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Modal from 'react-modal'

class Post extends Component {
    state = {
        editModalOpen: false,
        editPost: null
    }

    componentDidMount() {
        Modal.setAppElement('body');
    }

    openEditModal = (post) => {
        this.setState(() => ({editModalOpen: true, editPost: post}))
    }

    closeEditModal = () => this.setState(() => ({editModalOpen: false, editPost: null}))

    saveEdit = (e) => {
        e.preventDefault()

        const {editPost} = this.state;
        const newTitle = this.editTitleInput.value;
        const newBody = this.editBodyInput.value;

        this.props.dispatch(fetchEditPost(editPost.id, newTitle, newBody)).then(() => this.closeEditModal());
    }

    vote(postId, voteType) {
        this.props.dispatch(fetchVoteOnPost(postId, voteType));
    }

    render() {
        const {editModalOpen, editPost} = this.state;
        const {post, detailsPage} = this.props;

        return (
            <div key={post.id} className="row post">
                <div className="col-1 text-center">
                    <button className="icon-btn" onClick={() => this.vote(post.id, 'upVote')}>
                        <FaArrowUp/>
                    </button>
                    <h2 className="vote-score">{post.voteScore}</h2>
                    <button className="icon-btn" onClick={() => this.vote(post.id, 'downVote')}>
                        <FaArrowDown/>
                    </button>
                </div>
                <div className="col">
                    <div>
                        {
                            detailsPage ?
                                <h3>{post.title}</h3> :
                                <Link to={`${post.category}/${post.id}`}><h3>{post.title}</h3></Link>
                        }
                        <div>
                            Posted by <b>{post.author}</b> {/*space*/}
                            on <b>{timestampToDate(post.timestamp)}</b> {/*space*/}
                            in <b>{post.category}</b>
                        </div>
                        {detailsPage && <div>
                            <pre>{post.body}</pre>
                        </div>}
                        <div>
                            <b>{post.commentCount}</b> comments | {/*space*/}
                            <button className="btn btn-primary btn-sm" onClick={() => this.openEditModal(post)}>edit</button> | {/*space*/}
                            <button className="btn btn-danger btn-sm">delete</button> | {/*space*/}
                        </div>
                    </div>
                </div>

                <Modal
                    className='modalz edit-post-modal'
                    overlayClassName='overlay'
                    isOpen={editModalOpen}
                    onRequestClose={this.closeEditModal}
                    contentLabel='Modal'>
                    {editModalOpen && editPost &&
                        <div>
                            <h1>EDIT POST</h1>
                            <div>
                                <h3>Edit title:</h3>
                                <input defaultValue={editPost.title} className='modal-input' type="text" ref={(input) => this.editTitleInput = input}/>
                            </div>
                            <div>
                                <h3>Edit body:</h3>
                                <textarea defaultValue={editPost.body} ref={(input) => this.editBodyInput = input} rows="4" cols="100"/>
                            </div>
                            <div>
                                <button className="btn btn-primary" onClick={this.saveEdit}>SAVE</button>
                                <button className="btn btn-danger" onClick={this.closeEditModal}>CANCEL</button>
                            </div>
                        </div>
                    }
                </Modal>
            </div>
        );
    }
}

export default withRouter(connect()(Post));