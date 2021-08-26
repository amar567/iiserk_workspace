import { Component } from "react";
import './sidebar.css'
import ProfleImg from '../assets/images/profile_pic.svg'
import github from '../assets/images/github.svg'

export default class Sidebar extends Component {
    
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className={'sideContainer'}>

                    <div>
                        <div style={{height:'8vh'}}></div>

                        <div className={'username'}>
                            <img src={ProfleImg} alt="profile" style={{width:'24%'}}></img>
                            {this.props.username}
                        </div>

                        <div style={{height:'1vh'}}></div>
                        <hr className='username'></hr>
                        <div style={{height:'1vh'}}></div>

                        <div style={{marginLeft:'2vw'}}>
                            <a className="pages" href="/">
                                <h1 className="pages">Home</h1>
                            </a>
                            <a className="pages" href="/course">
                                <h1 className="pages">Course view</h1>
                            </a>
                            <a className="pages" href="/util">
                                <h1 className="pages">Utility +</h1>
                            </a>
                        </div>
                    </div>

                    <div style={{margin:'0 auto 2vh auto'}}>
                        <a target="_blank" href="https://github.com/ParthBibekar/Welearn-bot">
                            <img src={github} alt="" style={{width:'4vw'}}></img>
                        </a>
                    </div>

                </div>
            </>
        );
    }
}