import React from 'react';

import Square from './components/square/square.jsx';
import CoolDropdown from './components/cooldropdown/CoolDropdown.jsx';
import MessageBox from './components/messagebox/MessageBox.jsx';
import AddMessageBox from './components/addmessagebox/AddMessageBox.jsx';

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {name: "Robert F. Dickerson"}
        this.state = {twitterHandle: "@rfdickerson"}
    }

    changeName(name) {
        this.setState({name});
    }

    render() {
        const name = "Robert F. Dickerson";
        const twitterHandle = "@rfdickerson";

        return (
            <section className="section">
                <div class="container">
                    <MessageBox name={this.state.name} changeName={this.changeName.bind()} twitterHandle={twitterHandle} />
                    <AddMessageBox changeName={this.changeName.bind(this)} />
                </div>
            </section>
        )
    }
}