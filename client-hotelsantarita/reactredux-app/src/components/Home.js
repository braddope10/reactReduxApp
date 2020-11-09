import React, { Component } from 'react'
import PictureGrid from './PictureGrid'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>This is the Homepage.</h3>
                <PictureGrid />
            </div>
        )
    }
}
