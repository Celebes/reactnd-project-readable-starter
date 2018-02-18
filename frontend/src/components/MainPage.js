import React, {Component} from 'react';
import Posts from "./Posts";
import Categories from "./Categories";

class MainPage extends Component {
    render() {
        return (
            <div>
                <h1><b>/r/all</b></h1>
                <h1>Categories:</h1>
                <Categories/>
                <h1>Posts:</h1>
                <Posts/>
            </div>
        )
    }
}

export default MainPage;