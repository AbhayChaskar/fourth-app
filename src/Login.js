import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={email:'',password:'',data:{email:"abc@gmail.com",password:"1234"},errMsg:'',succMsg:''}
    }
    handler=(event)=>{
        let {name,value}=event.target;
        this.setState({...this.state,[name]:value})
    }
    postLogin=(event)=>{
        event.preventDefault();
        console.log(this.state)
        if(this.state.email==this.state.data.email && this.state.password==this.state.data.password){
            this.setState({...this.state,succMsg:"Login Successfully"})
        }
        else {
            this.setState({...this.state,errMsg:"Enter correct email or password"})
        }
    }
    render() {
        return (
            < >
                <h2 className="text-center">Login Here</h2>
            <div className="container">
        {this.state.errMsg!='' && 
        <div className="alert alert-danger"> {this.state.errMsg} </div>}
         {this.state.succMsg!='' && 
        <div className="alert alert-success"> {this.state.succMsg} </div>}
                <form onSubmit={this.postLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" onChange={this.handler}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" onChange={this.handler}/>
                    </div>
                    <input type="submit" value="Login" className="btn btn-success"/>
                </form>
                </div>
            </>
        )
    }
}

export default Login
