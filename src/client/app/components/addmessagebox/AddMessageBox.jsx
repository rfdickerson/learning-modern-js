// @flow

import React from 'react';

export default class AddMessageBox extends React.Component {

    changeName(e : Event) {
        const target = e.target
        if (target instanceof HTMLInputElement) {
            this.props.changeName(target.value);
        } 
    }

    changeTwitter(e: Event) {
        const target = e.target 
        if (target instanceof HTMLInputElement) {
            this.props.changeTwitter(target.value);
        }
    }

    render() {
        return (
            <div>
                <input onChange={this.changeName.bind(this)} />
                <input onChange={this.changeTwitter.bind(this)} />
            </div>
        )
    }

}