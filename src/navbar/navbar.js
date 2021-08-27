import { Component } from "react";
import './nav.css'

// import images
import settings from  '../assets/images/settings.svg'
import bell from '../assets/images/bell.svg'
import timeTable from '../assets/images/time-table.svg'
import calendar from '../assets/images/calendar.svg'
import mail from '../assets/images/mail.svg'
import iiserk from '../assets/images/iiserk.svg'
import Switchbtn from './switch/Switch';
import Cookies from 'universal-cookie';
import { ChromePicker } from "react-color";

const cookies = new Cookies();
export default class Navbar extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            setting : false,
            notification : false,
            clock : false,
            bgpicker : false,
            sdbgpicker : false
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

    handleClock = ()=>{
        cookies.set('clock',!this.state.clock)
        this.setState({clock : !this.state.clock})
        this.props.clockHandler()
    }

    handlePgBgColorChange = (arg)=>{
        this.props.handlePgBgColorChange(arg)
    }

    handleSdBgColorChange = (arg)=>{
        this.props.handleSdBgColorChange(arg)
    }

    componentDidMount(){
        let cookClock = cookies.get('clock')
        if(cookClock === undefined | cookClock === 'false'){
            cookies.set('clock', false)
            cookClock = false
        }else if(cookClock === 'true'){
            cookClock = true
        }
        this.setState({clock: cookClock})
    }

    render() {
        return (
            <>
                <div className='navbar'>
                    <div style={{display:'flex',justifyContent:'space-evenly',width:'20vw'}}>
                        <a rel="noreferrer"target="_blank" href="https://welearn.iiserkol.ac.in/my/">
                            <button className='navbtns'>
                                <img className={'navbar_img'} src={iiserk} alt='' style={{width:'6vh'}}></img>
                            </button>
                        </a>
                        <a rel="noreferrer"target="_blank" href="https://mail.google.com/">
                            <button className='navbtns'>
                                <img className={'navbar_img'} src={mail} alt='' style={{width:'6vh'}}></img>
                            </button>
                        </a>
                        <a rel="noreferrer"target="_blank" href="https://calendar.google.com/">
                            <button className='navbtns'>
                                <img className={'navbar_img'} src={calendar} alt='' style={{width:'6vh'}}></img>
                            </button>
                        </a>
                        <a rel="noreferrer"target="_blank" href="https://www.iiserkol.ac.in/media/filer_public/52/e1/52e187f8-ee85-4b8c-a562-745bb4dcf917/time_table_autumn_2021.pdf">
                            <button className='navbtns'>
                                <img className={'navbar_img'} src={timeTable} alt=''></img>
                            </button>
                        </a>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-evenly',width:'10vw'}}>
                            <button className={(this.state.notification)?'navbtns active':'navbtns'} onClick={this.notification}>
                                <img className={(this.state.notification)?'rotate_bell navbar_img':'navbar_img bell'} src={bell} alt=''></img>
                            </button>
                            <button className={(this.state.setting)?'navbtns active':'navbtns'} onClick={this.settings}>
                                <img className={(this.state.setting)?'rotate navbar_img':'navbar_img'} src={settings} alt=''></img>
                            </button>
                    </div>
                
                </div>

                <div>
                    <div className={(this.state.setting)?'settingsPanel show':'settingsPanel hide'}>
                        <div style={{fontSize:'3vh', fontFamily:"'Roboto',sans-serif",padding:'8vh 3vw'}}>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <div>Signed in as : </div>
                                <div>{this.props.data.username}</div>
                            </div>
                            <br></br>
                            <div> 
                                <div style={{display:'flex', justifyContent:'space-between',cursor:'pointer'}} onClick={()=>{this.setState({bgpicker:!this.state.bgpicker})}}>
                                    Page_background : <div style={{backgroundColor:this.props.data.pgBackground,height:'30px',width:'30px',borderRadius:'50px'}}/>
                                </div>
                                <div style={(this.state.bgpicker)?null:{display:'none'}}>
                                    <ChromePicker color={ this.props.data.pgBackground } onChange={ this.handlePgBgColorChange } style={{width:'400px'}}/>
                                </div>
                            </div>
                            <br></br>
                            <div> 
                                <div style={{display:'flex', justifyContent:'space-between',cursor:'pointer'}} onClick={()=>{this.setState({sdbgpicker:!this.state.sdbgpicker})}}>
                                    Sidebar_background : <div style={{backgroundColor:this.props.data.sdBackground,height:'30px',width:'30px',borderRadius:'50px'}} />
                                </div>
                                <div style={(this.state.sdbgpicker)?null:{display:'none'}}>
                                    <ChromePicker color={ this.props.data.sdBackground } onChange={ this.handleSdBgColorChange } style={{width:'400px'}}/>
                                </div>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                Clock <Switchbtn isChecked={this.state.clock} handleChange={this.handleClock}/>
                            </div>
                            <br></br><br></br>
                            <div style={{cursor:'pointer'}} >
                                Logout
                            </div>
                        </div>
                    </div>
                    <div className={(this.state.notification)?'settingsPanel show':'settingsPanel hide'} style={{backgroundColor:'white'}}>

                    </div>
                </div>

            </>
        );
    }
}