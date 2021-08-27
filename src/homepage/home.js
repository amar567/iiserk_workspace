import { Component } from 'react';
import './home.css'
import {ChromePicker} from 'react-color'

export default class Home extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            background : '#ff0000',
        }
    }

    handleChangeComplete = (arg)=>{
        this.setState({background:arg.hex})
        // console.log(this.state.background);
    }

    componentDidMount(){

    }

    render() {
        return (
            <>
                <div className={'homepgcont'}>
                    <div className="red" style={{backgroundColor: this.state.background}}>
                        <ChromePicker color={ this.state.background } onChange={ this.handleChangeComplete }/>
                    </div>
                    <div className="grey"></div>
                </div>
            </>
        );
    }
}