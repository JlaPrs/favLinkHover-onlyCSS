import React, {Component} from "react";

import './HoverLink.scss';

export default class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            styles: 'Please selcet one option',
            option1: 'a1',
            option2: 'a2',
            option3: 'a3',
            option4: 'a4',
            option5: 'a5',
            option6: 'a6'
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
                <select id="de" className="jla-select" onChange={this.handleChange.bind(this)} value={this.state.styles}>
                    <option className="jla-select-option" value="select">Select a Link style</option>
                    <option className="jla-select-option" value={this.state.option1}>Bottom to top</option>
                    <option className="jla-select-option" value={this.state.option2}>Top to Bottom</option>
                    <option className="jla-select-option" value={this.state.option3}>Bottom to full</option>
                    <option className="jla-select-option" value={this.state.option4}>Full to bottom</option>
                    <option className="jla-select-option" value={this.state.option5}>brand colors</option>
                    <option className="jla-select-option" value={this.state.option6}>cubic-bezier</option>
                </select>
                <p className="jla-paragraph">
                    Sed tamen
                    <a href="#" className={`${this.state.styles} instagram`}>instagram</a> quid velit. Quod quidem iam fit etiam in Academia.
                </p>
                <p className="jla-paragraph">
                    Si enim ad populum me vocas, eum. Contineo me ab exemplis. Non potes,
                    <a href="#" className={`${this.state.styles} twitter`}>twitter</a> illa.
                    Lorem ipsum dolor sit amet Voluptate nesciunt alias optio consequuntur
                    quae nisi aliquam adipisci, a <a className={`${this.state.styles} shrek`} href="#">shrek</a> facere minus fugit praesentium, amet atque
                    dolorum nam omnis iste.
                </p>

            </div>
        );
    }
}
