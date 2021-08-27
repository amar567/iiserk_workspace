import { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Home from './homepage/home.js'
import './App.css';
import Navbar from './navbar/navbar.js';
import Sidebar from './sidebar/sidebar.js';
import Course from './courses/course.js';
import Util from './utility/Util.js';
import Clock from './navbar/clock/Clock.js';
import Cookies from 'universal-cookie';
// const queryParams = new URLSearchParams(window.location.search);

const cookies = new Cookies();
export default class App extends Component {
  
  constructor(props){
      super(props)

      this.state = {
        username :'Amardeepsingh',
        page : 1,
        clock : true,
        pgBackground : 'black',
        sdBackground : '#00C2FF'
      }
  }

  pageHandler = (n)=>{
    this.setState({page : n})
  }

  clockHandler =()=>{
    this.setState({clock: !this.state.clock})
  }

  handlePgBgColorChange = (arg)=>{
    this.setState({pgBackground: arg.hex})
    cookies.set('pgbg',arg.hex)
  }

  handleSdBgColorChange = (arg)=>{
    this.setState({sdBackground: arg.hex})
    cookies.set('sdbg',arg.hex)
  }

  componentDidMount(){
    if(cookies.get('clock') === 'false' | cookies.get('clock') === undefined ){
      this.setState({clock : false})
      cookies.set('clock',false)
    }else{
      this.setState({clock: true})
    }

    let pgbg = cookies.get('pgbg')
    if(cookies.get('pgbg') === undefined ){
      cookies.set('pgbg','#000000')
      pgbg = '#000000'
    }
    this.setState({pgBackground:pgbg})

    let sdbg = cookies.get('sdbg')
    if(cookies.get('sdbg') === undefined ){
      cookies.set('sdbg','#00C2FF')
      sdbg = '#00C2FF'
    }
    this.setState({sdBackground:sdbg})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{backgroundColor:this.state.pgBackground}}>
          
          <div className={'pageContainer'}>
  
            <Sidebar username={this.state.username} pageHandler={this.pageHandler} page={this.state.page} data={{sdBackground:this.state.sdBackground}} ></Sidebar>
  
            <div className={'rightside'}>
              <div className='nav'>
                {(this.state.clock === true)?<Clock/>:null}
                <Navbar clockHandler={this.clockHandler} handlePgBgColorChange={this.handlePgBgColorChange} handleSdBgColorChange={this.handleSdBgColorChange} data={{username:'ahk19ms165',pgBackground:this.state.pgBackground,sdBackground:this.state.sdBackground}}/>
              </div>
              <div className={'rightBottom'}>
                {(this.state.page === 1)?<Home data={{leftBlock:'#ffffff',rightBlock:'#ffffff'}}></Home> : null}
                {(this.state.page === 2)?<Course></Course> : null}
                {(this.state.page === 3)?<Util></Util> : null}
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}