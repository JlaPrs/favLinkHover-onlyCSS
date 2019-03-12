import React, {Component} from "react";
import './HoverLink.scss';
import './coolesLinks.scss';

export default class HoverLink extends Component {

    render() {
        return (
            <div>
                <p className="jla-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen
                    <a href="#" className="a1">intellego</a> quid velit. Quod quidem iam fit etiam in Academia.
                    Si enim ad populum me vocas, eum. Contineo me ab exemplis. Non potes,
                    <a href="#" className="a2">nisi retexueris</a> illa. Tu vero, inquam, ducas licet, si sequetur;
                    Quorum altera prosunt, nocent altera. Duo Reges: constructio interrete. Certe non potest.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nesciunt alias optio consequuntur
                    quae nisi aliquam adipisci, a <a className="a3" href="#">quas saepe</a> facere minus fugit praesentium, amet atque
                    dolorum nam omnis iste.
                </p>

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
