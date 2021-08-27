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
                <div className={'sideContainer'} style={{backgroundColor:this.props.data.sdBackground}}>

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
                                <h1 onClick={()=>{this.props.pageHandler(1)}} className="pages" style={(this.props.page === 1)?{textDecoration:'underline 3px'}:null} >Home</h1>
                                <h1 onClick={()=>{this.props.pageHandler(2)}} className="pages" style={(this.props.page === 2)?{textDecoration:'underline 3px'}:null} >Course view</h1>
                                <h1 onClick={()=>{this.props.pageHandler(3)}} className="pages" style={(this.props.page === 3)?{textDecoration:'underline 3px'}:null} >Utility +</h1>
                                <a rel="noreferrer" target="_blank" href="https://github.com/ParthBibekar/Welearn-bot/wiki" style={{textDecoration:'none'}}>
                                    <h1 className="pages">Help?</h1>
                                </a>
                        </div>
                    </div>

                    <div style={{margin:'0 auto 2vh auto'}}>
                        <a rel="noreferrer"target="_blank" href="https://github.com/ParthBibekar/Welearn-bot">
                            <img src={github} alt="" style={{width:'4vw'}}></img>
                        </a>
                    </div>

                </div>
            </>
        );
    }
}