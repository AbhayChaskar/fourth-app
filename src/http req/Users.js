import React, { Component } from 'react'

export class Users extends Component {
    state={userData:[]};
    componentDidMount(){
        const URL="https://jsonplaceholder.typicode.com/users";
        fetch(URL)
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            this.setState({userData:data});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        return (
            <>
            <h2>Users Details</h2>
            <div className="container">
                <table border="2">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>phone</th>
                </tr>
                {this.state.userData.map((user)=>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
                )}
                </table>
                <hr/>
            </div>
            </>
        )
    }
}
export default Users
