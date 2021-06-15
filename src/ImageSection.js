import React, { Component } from 'react'

export default class ImageSection extends Component {
    render() {
        return (
            <div className="container">
                <div className="title-section">
                    <h1>Chocolate Pizza</h1>
                    <h4>POSTEN ON 15 DEC 2013</h4>
                </div>
                <div className="main-image">
                    <img src="/choco-pizza.png" alt='chocoPizza' />
                </div>
            </div>
        )
    }
}
