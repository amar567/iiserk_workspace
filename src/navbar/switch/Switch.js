import { Component } from "react";
import './switch.css'

export default class Switchbtn extends Component {
    render () {

        return(
            <div className="switch-container">
                <label>
                    <input checked={ this.props.isChecked } onChange={ this.props.handleChange } className="switch" type="checkbox" />
                    <div>
                        <div></div>
                    </div>
                </label>
            </div>
        );
    }
}
