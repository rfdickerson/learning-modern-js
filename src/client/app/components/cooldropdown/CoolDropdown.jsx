
import React from 'react';

export default class CoolDropdown extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            collapsed: true
        }

        this.toggle = this.toggle.bind(this);
    }


    toggle(e) {
        console.log('Dropdown was clicked');
        this.setState( { collapsed: !this.state.collapsed });
    }

    getClassNames() {
        if (this.state.collapsed ) {
            return 'collapsed';
        } else {
            return 'opened';
        }
        
    }

    render() {
        return (
            <div>
                <a className="button is-primary" onClick={this.toggle} >Click Me</a>
                <div id="dropDown" className={this.getClassNames()}>
                    <p>One</p>
                    <p>Two</p>
                    <p>Three</p>
                    <p>Four</p>
                    <p>Five</p>
                    <p>Six</p>
                </div>
            </div>
        )
    }
} 