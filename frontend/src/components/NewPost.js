import React, {Component} from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {fetchCategories, fetchAddPost} from "../actions";
import Modal from 'react-modal'
import {generateUUIDv4} from "../utils/helper";

class NewPost extends Component {
    state = {
        modalOpen: false,
        title: '',
        body: '',
        author: '',
        category: ''
    }

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        Modal.setAppElement('body');
        this.props.dispatch(fetchCategories());
    }

    handleInputChange(event) {
        const {value, name} = event.target;

        console.log('handleInputChange', value, name);

        this.setState({
            [name]: value
        });
    }

    openModal = () => this.setState(() => ({modalOpen: true, title: '', body: '', author: '', category: ''}))
    closeModal = () => this.setState(() => ({modalOpen: false}))

    handleSubmit(event) {
        console.log('onSubmit, state: ', this.state);
        event.preventDefault();

        const {title, body, author} = this.state;
        let {category} = this.state;

        if (category.length === 0) {
            category = this.props.categories[0].path;
        }

        const newPost = {
            id: generateUUIDv4(),
            timestamp: Date.now(),
            title,
            body,
            author,
            category
        };

        this.props.dispatch(fetchAddPost(newPost)).then(() => this.closeModal());
    }

    render() {
        const {modalOpen, title, body, author, category} = this.state;
        const {categories} = this.props;

        return (
            <div>
                <button className="btn btn-primary" onClick={() => this.openModal()}>ADD POST</button>

                <Modal
                    className='modalz'
                    overlayClassName='overlay'
                    isOpen={modalOpen}
                    onRequestClose={this.closeModal}
                    contentLabel='Modal'>

                    <h1>NEW POST</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <h3>Title:</h3>
                            <input style={{width: '100%'}}
                                   name="title"
                                   type="text"
                                   value={title}
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
                        <div>
                            <h3>Author:</h3>
                            <input style={{width: '100%'}}
                                   name="author"
                                   type="text"
                                   value={author}
                                   onChange={this.handleInputChange}/>
                        </div>
                        <div>
                            <h3>Category:</h3>
                            <select style={{width: '100%'}}
                                    name="category"
                                    value={category}
                                    onChange={this.handleInputChange}>
                                {categories.map(c => (
                                    <option key={c.path} value={c.path}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                        <button style={{marginTop: '20px'}} className="btn btn-primary" type="submit">ADD</button>
                    </form>

                </Modal>

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default withRouter(connect(mapStateToProps)(NewPost));