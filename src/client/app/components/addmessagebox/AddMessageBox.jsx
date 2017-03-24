// @flow

import React from 'react';

export default class AddMessageBox extends React.Component {

    changeName(e : Event) {
        const target = e.target
        if (target instanceof HTMLInputElement) {
            this.props.changeName(target.value);
        } 
    }

    render() {
        return (
            <input onChange={this.changeName.bind(this)} />
        )
    }

}