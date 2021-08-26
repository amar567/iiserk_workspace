import { Component } from 'react';
import './home.css'

export default class Home extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <div style={{color:'white'}}>
                    <h1>
                        homepage
                    </h1>
                </div>
            </>
        );
    }
}