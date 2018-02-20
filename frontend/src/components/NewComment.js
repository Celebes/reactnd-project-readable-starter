import React, {Component} from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {fetchAddComment} from "../actions";
import Modal from 'react-modal'
import {generateUUIDv4} from "../utils/helper";

class NewComment extends Component {
    state = {
        modalOpen: false,
        body: '',
        author: ''
    }

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        Modal.setAppElement('body');
    }

    handleInputChange(event) {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('onSubmit, state: ', this.state);
        event.preventDefault();

        const {postId} = this.props;
        const {body, author} = this.state;

        const newComment = {
            id: generateUUIDv4(),
            timestamp: Date.now(),
            parentId: postId,
            body,
            author
        };

        this.props.dispatch(fetchAddComment(newComment)).then(() => this.closeModal());
    }

    openModal = () => this.setState(() => ({modalOpen: true, body: '', author: ''}))
    closeModal = () => this.setState(() => ({modalOpen: false}))

    render() {
        const {modalOpen, body, author} = this.state;

        return (
            <div>
                <button className="btn btn-primary" onClick={() => this.openModal()}>ADD COMMENT</button>

                <Modal
                    className='modalz'
                    overlayClassName='overlay'
                    isOpen={modalOpen}
                    onRequestClose={this.closeModal}
                    contentLabel='Modal'>

                    <h1>NEW COMMENT</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <h3>Author:</h3>
                            <input style={{width: '100%'}}
                                   name="author"
                                   type="text"
                                   value={author}
                                   onChange={this.handleInputChange}/>
                        </div>
                        <div>
                            <h3>Body:</h3>
                            <textarea name="body"
                                      type="text"
                                      rows="5"
                                      style={{width: '100%'}}
                                      value={body}
                                      onChange={this.handleInputChange}/>
                        </div>
                        <button style={{marginTop: '20px'}} className="btn btn-primary" type="submit">ADD</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default withRouter(connect()(NewComment));