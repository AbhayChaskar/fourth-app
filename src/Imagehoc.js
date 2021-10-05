import React,{Component} from 'react';
const Imagehoc=(Component, Compon)=>{
    return class Imagehoc extends Component{
        
        render(){
            console.log(this.props.isLoading)
            return (
                <>
                {!this.props.isLoading? <Component {...this.props}/> : <Compon {...this.props}/>}
                </>
            )
        }
    }
}
export default Imagehoc;