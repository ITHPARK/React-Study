import { Component } from "react";

import "./Square.css";


export class Square extends Component {


    render () {
        return (
            <button className="square" onClick={()=> {this.setState({value: 'x'})}}>
                {this.props.value}
            </button>
        )
    }
} 