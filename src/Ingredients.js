import React, { Component } from 'react'

export default class Ingredients extends Component {
    render() {
        return (
            <div>
                <li>{this.props.amount} {this.props.name}</li>
            </div>
        )
    }
}
