import React, { Component } from 'react'

class CountComp extends Component{

    constructor(){
        super();
        this.state={
            count:0
        }

    }
    increases =()=>{
        this.setState({count:this.state.count+1});
    
    }
    decreases =()=>{
        this.setState({count:this.state.count-1});
    }
    reset =()=>{
        this.setState({count:this.state.count=0});
    }
    render(){
        return(
            <div style={{border:"2px solid blue",width:"300px" }}>
                
                <h2>COUNTING</h2>
                <p>Count:<strong>{this.state.count}</strong></p>
                   <button type="button" class="btn btn-info"  onClick={()=>this.increases()}>Count +</button>
                   <button type="button" class="btn btn-info" style={{margin:"10px"}} onClick={()=>this.decreases()}>Count -</button> 
                   <button type="button" class="btn btn-danger" onClick={()=>this.reset()}>Reset</button> 
            </div>
        )

    }
}
export default CountComp;