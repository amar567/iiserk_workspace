import { Component } from 'react';
import './home.css'
import Todo from './todo/Todo';
// import {ChromePicker} from 'react-color'

export default class Home extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            dirModel : []
        }
    }

    fetchDir = async()=>{
        
        const result = await fetch(`http://localhost:3000/tree`).then((res) => res.json())
        this.setState({dirModel:result})
        // console.log(this.state.dirModel);
    }

    componentDidMount(){
        this.fetchDir()
    }

    render() {
        return (
            <>
                <div className={'homepgcont'}>
                    <div className="red" style={{backgroundColor: this.props.data.lftBackground}}>
                        {this.state.dirModel.map((obj,index)=>{return(
                            (obj.filetype === "none")?<div key={index}><div> folder </div><br/> </div>:<div key={index}> <div> file </div><br/> </div>
                        )})}
                    </div>
                    <div className="grey" style={{backgroundColor: this.props.data.rightBlock}}>
                            <Todo/>
                    </div>
                </div>
            </>
        );
    }
}