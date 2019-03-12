import React, {Component} from "react";

export default class ColorPicker extends Component {
    constructor(props){
        super();
        this.state = {
            styles: 'select'
        };
    }

    handleChange(e){
        this.setState({
            styles: e.target.value
        })
    }

    render() {

        return (
            <div>
                <select id="lang" onChange={this.handleChange.bind(this)} value={this.state.styles}>
                    <option value="select">Select a Link style</option>
                    <option value="Option1">Link Style 1</option>
                    <option value="Option2">Link Style 2</option>
                    <option value="Option3">Link Style 3</option>
                </select>
                <h2>{this.state.styles}</h2>
            </div>
        );
    }
}
