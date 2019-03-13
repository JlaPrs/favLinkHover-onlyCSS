import React, {Component} from "react";
import './HoverLink.scss';
import './coolesLinks.scss';

export default class HoverLink extends Component {

    render() {
        return (
            <div>

                <div className="colored-links">
                    <a href="#">Slenderman</a>
                    <a id="captain" href="#">Captain America</a>
                    <a id="iron-man" href="#">Iron Man</a>
                    <a className="green" href="#">Shrek</a>
                    <a className="pink" href="#">le Vérone</a>
                    <a className="codepen" href="#">Codepen</a>
                    <a className="instagram" href="#">Instagram</a>
                    <a className="linkedin" href="#">Linkedin</a>
                    <a className="twitter" href="#" >Twitter</a>
                    <a className="ubeeqo" href="#">Ubeeqo</a>
                </div>

            </div>
        );
    }
}
