
// @flow

import React from 'react';

import Square from './components/square/square.jsx';
import CoolDropdown from './components/cooldropdown/CoolDropdown.jsx';
import MessageBox from './components/messagebox/MessageBox.jsx';
import AddMessageBox from './components/addmessagebox/AddMessageBox.jsx';

export default class Layout extends React.Component {
  
    constructor() {
        super()
        this.state = {
            name: "Robert F. Dickerson",
            twitterHandle: "@rfdickerson"
        }
        // this.state = {twitterHandle: "@rfdickerson"}
    }

    changeName(name) {
        this.setState({name: name})
    }

    changeTwitter(twitterHandle) {
        this.setState({twitterHandle: twitterHandle})
    }

    render() {
        
        return (
            <section className="section">
                <div class="container">
                    <MessageBox name={this.state.name} 
                                changeName={this.changeName.bind()} 
                                changeTwitter={this.changeTwitter.bind()} 
                                twitterHandle={this.state.twitterHandle} />
                    <AddMessageBox changeName={this.changeName.bind(this)}
                                   changeTwitter={this.changeTwitter.bind(this)} />
                </div>
            </section>
        )
    }
}