import { Component } from "react";
import './nav.css'

// import images
import settings from  '../assets/images/settings.svg'
import bell from '../assets/images/bell.svg'
import timeTable from '../assets/images/time-table.svg'
import calendar from '../assets/images/calendar.svg'
import mail from '../assets/images/mail.svg'
import iiserk from '../assets/images/iiserk.svg'
export default class Navbar extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            setting : false,
            notification : false
        }
    }

    settings = ()=>{
        this.setState({notification: false})
        this.setState({setting : !this.state.setting})
    }

    notification = ()=>{
        this.setState({setting : false})
        this.setState({notification: !this.state.notification})
    }

    render() {
        return (
            <>
                <div className='navbar'>
                    <div style={{display:'flex',justifyContent:'space-evenly',width:'20vw'}}>
                        <a target="_blank" href="https://welearn.iiserkol.ac.in/my/">
                            <button className='navbtns'>
                                <img className={'navbar_img'} src={iiserk} alt='' style={{width:'6vh'}}></img>
                            </button>
                        </a>
                        <a target="_blank" href="https://mail.google.com/">
                            <button className='navbtns'>
                                <img className={'navbar_img'} src={mail} alt='' style={{width:'6vh'}}></img>
                            </button>
                        </a>
                        <a target="_blank" href="https://calendar.google.com/">
                            <button className='navbtns'>
                                <img className={'navbar_img'} src={calendar} alt='' style={{width:'6vh'}}></img>
                            </button>
                        </a>
                        <a target="_blank" href="https://www.iiserkol.ac.in/media/filer_public/52/e1/52e187f8-ee85-4b8c-a562-745bb4dcf917/time_table_autumn_2021.pdf">
                            <button className='navbtns'>
                                <img className={'navbar_img'} src={timeTable} alt=''></img>
                            </button>
                        </a>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-evenly',width:'10vw'}}>
                            <button className='navbtns' onClick={this.notification}>
                                <img className={'navbar_img'} src={bell} alt=''></img>
                            </button>
                            <button className='navbtns' onClick={this.settings}>
                                <img className={(this.state.setting)?'rotate navbar_img setting':'navbar_img setting'} src={settings} alt=''></img>
                            </button>
                    </div>
                </div>

                <div>
                    <div className={(this.state.setting)?'settingsPanel show':'settingsPanel hide'}></div>
                    <div className={(this.state.notification)?'settingsPanel show':'settingsPanel hide'} style={{backgroundColor:'red'}}></div>
                </div>

            </>
        );
    }
}