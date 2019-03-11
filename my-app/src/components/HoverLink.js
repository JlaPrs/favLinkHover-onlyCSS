import React, {Component} from "react";
import './HoverLink.scss';
import './coolesLinks.scss';

export default class HoverLink extends Component {

    render() {
        return (
            <div>
                <div className="jla-link-hover-wrapper">
                    <p className="jla-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen
                        <a href="#">intellego</a> quid velit. Quod quidem iam fit etiam in Academia.
                        Si enim ad populum me vocas, eum. Contineo me ab exemplis. Non potes,
                        <a href="#">nisi retexueris</a> illa. Tu vero, inquam, ducas licet, si sequetur;
                        Quorum altera prosunt, nocent altera. Duo Reges: constructio interrete. Certe non potest.
                    </p>

                    <p>
                        Hover and <a href="#" className="a1">click the bold text</a> to see the effect.
                        Also try resizing the window width, to see how it works when link is displayed on multiple lines.
                        Below are some links, that demostrate <a href="#" className="a2">how this mixin can be used</a>
                        to only target a specific element.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nesciunt alias optio consequuntur
                        quae nisi aliquam adipisci, a <a className="a3" href="#">quas saepe</a> facere minus fugit praesentium, amet atque
                        dolorum nam omnis iste.
                    </p>

                    <p className="jla-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen
                        <a className="a1 twitter" href="#">twitter</a> quid velit. Quod quidem iam fit etiam in Academia.
                        Si enim ad populum me vocas, eum. Contineo me ab exemplis. Non potes,
                        <a className="a3" href="#">nisi retexueris</a> illa. Tu vero, inquam, ducas licet, si sequetur;
                        Quorum altera prosunt, nocent altera. Duo Reges: constructio interrete. Certe non potest.
                    </p>
                </div>

                <div className="colored-links">
                    <a href="#">Slenderman</a>
                    <a id="captain" href="#">Captain America</a>
                    <a id="iron-man" href="#">Iron Man</a>
                    <a className="green" href="#">Shrek</a>
                    <a className="pink" href="#">le Vérone</a>
                    <a className="codepen" href="#">Codepen</a>
                    <a className="instagram" href="#">Instagram</a>
                    <a className="linkedin" href="#">Linkedin</a>
                    <a className="twitter" href="https://www.twitter.com/tomateoignon" target="_blank">Twitter</a>
                    <a className="ubeeqo" href="#">Ubeeqo</a>
                </div>

            </div>
        );
    }
}
