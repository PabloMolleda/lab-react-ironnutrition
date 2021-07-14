import React from 'react';
import { Component } from 'react'
import foods from '../foods.json'
import FoodCard from './FoodCard';


class FoodBox extends Component {

    constructor() {
        super()
        this.state = { food: foods }
    }

    render() {

        return (
           this.state.food.map(elm => <FoodCard name={elm.name} image={elm.image} calories={elm.calories} quantity={elm.quantity} />)
        )

    }

}

export default FoodBox