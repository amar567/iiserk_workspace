import { Component } from "react";
import './nav.css'
import ProfleImg from '../assets/images/profile_pic.svg'

export default class Navbar extends Component {
    
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className={'navContainer'}>

                    <div style={{height:'8vh'}}></div>

                    <div className={'username'}>
                        <img src={ProfleImg} alt="profile" style={{width:'24%'}}></img>
                        {this.props.username}
                    </div>

                <div style={{height:'1vh'}}></div>
                <hr className='username'></hr>

                </div>
            </>
        );
    }
}