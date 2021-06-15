import React, { Component } from 'react'
import Ingredients from './Ingredients.js'

export default class IngredientList extends Component {
    render() {
        const ingredients = [
            {name: 'milk', amount: '1 1/2 cups'},
            {name: 'mascarpone', amount: '1/2 cup'},
            {name: 'pink salt', amount: '1/2 tsp'},
            {name: 'Black Mission Figs', amount: '1lb'},
            {name: 'brown sugar', amount: '1/2 cup'},
            {name: 'water', amount: '2-4 tbsp'},
            {name: 'granulated sugar', amount: '4/3'},
            {name: 'egg yolks', amount: '2'},
            {name: 'lemon, juiced', amount: '1'},
            {name: 'butter', amount: '2 tbsp'},
            {name: 'honey roasted pecans, roughly chopped', amount: '1 cup'}
        ]
        return (
            <div className="index-card">
                <ul className="instructions">
                    {
                        ingredients.map(ingredient => {
                            return <Ingredients name={ingredient.name} amount={ingredient.amount} />
                        })
                    }
                </ul>
            </div>
        )
    }
}