import React, { Component } from 'react'
import SecondClass from './SecondClass'

export default class ClassComponent extends Component {
    render() {
        return (
            <>
                <div>first class component</div>
                <SecondClass />
            </>
        )
    }
}
