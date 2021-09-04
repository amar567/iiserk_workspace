import { Component } from "react";
import './course.css'

export default class Course extends Component {
    state = {  }
    render() {
        return (
            <>
                <div class={'files'} style={{backgroundColor: this.props.data.lftBackground}}>

                </div>
            </>
        );
    }
}