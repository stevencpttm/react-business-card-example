import React, { Component } from 'react'
import './BusinessCard.css'

class BusinessCard extends Component {
    render() {
        return (
            <div className="BusinessCard">
                <div style={{ flex: 3 }}>
                    <h1 className="name">{this.props.name}</h1>
                    <h2 className="title">{this.props.title}</h2>
                    <p>{this.props.department}</p>
                    <p>{this.props.phone}</p>
                </div>
                <div style={{ flex: 1 }}>
                    {this.props.showProfileImage && this.props.children}
                </div>
            </div>
        )
    }
}

export default BusinessCard