import React from 'react';


export default class AddMessageBox extends React.Component {

    changeName(e) {
        const newName = e.target.value;
        this.props.changeName(newName);
    }

    render() {
        return (
            <input onChange={this.changeName.bind(this)} />
        )
    }

}