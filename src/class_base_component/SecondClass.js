import React, { Component } from 'react'
import Thirdclass from './ThirdClass'

export default class ClassComponent extends Component {
    render() {
        return (
            <>
                <div>second class component</div>
                <Thirdclass />
            </>
        )
    }
}