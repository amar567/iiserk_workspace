import { Component } from "react";
import './todo.css'

export default class Todo extends Component {
    constructor(props){
        super(props)

        this.state = {
            todolst : [],
            item:''
        }
    }

    handleToDo = ()=>{
        let tdlst = this.state.todolst
        tdlst.push(this.state.item)
        this.setState({todolst: tdlst})
        localStorage.setItem('todolst',JSON.stringify(tdlst))
        this.setState({item:''})
    }

    handleChange =async(e)=>{
        this.setState({item:e.target.value})
    }

    componentDidMount(){
        this.setState({todolst: JSON.parse(localStorage.getItem('todolst'))})
        if(localStorage.getItem('todolst') === null){
            this.setState({todolst: []})
        }
    }

    render() {
        return (
           <>
                <div className={'todoCont'}>
                    <div>
                        <div>
                            {
                            // (this.state.tdlst.length!==0)?
                            this.state.todolst.map((obj,index)=>{
                                return(
                                    <div key={index}>

                                    </div>
                                )
                            }) 
                            // : null
                            }
                        </div>
                        <div style={{}}>
                            <input className={'tdinput'} type="text" value={this.state.item} onChange={this.handleChange} onKeyPress={(e)=>{if(e.key === 'Enter'){this.handleToDo()}}} placeholder="Type something" />
                            <button className={'tdsubbtn'} type="button" onClick={this.handleToDo}>
                                <font className={'tdbtntxt'}>+</font>
                            </button>
                        </div>
                    </div>
                </div>
           </>
        );
    }
}