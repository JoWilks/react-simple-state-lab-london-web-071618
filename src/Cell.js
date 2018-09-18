import React, { Component } from 'react';

export default class Cell extends Component {
    
    constructor(props) {
        super(props)
        const newColor = this.props.value
        this.state = {color: newColor}
    }

    changeColorOnClick = () => {
        if (this.state !== '#333') {
            this.setState({color: '#333'})
        }
    }

    render() {
        return (       
            <div className="cell"
                style={{backgroundColor: this.state.color}}
                onClick={this.changeColorOnClick}>
             </div>
        )
    }
}


