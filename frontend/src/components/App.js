import React, {Component} from 'react';
import {fetchCategories} from '../utils/api';

class App extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-light bg-faded">
                    <a className="navbar-brand">Readable</a>
                </nav>
                <button onClick={() => fetchCategories()}>CLICK</button>
            </div>
        );
    }
}

export default App;
