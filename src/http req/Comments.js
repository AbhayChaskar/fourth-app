import React, { Component } from 'react'

export class Comments extends Component {
    state={commentsData:[]};
    componentDidMount(){
        const URL="https://jsonplaceholder.typicode.com/comments";
        fetch(URL)
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            this.setState({commentsData:data});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        return (
            <>
            <h2>Recent Comments</h2>
            {this.state.commentsData.length>0?
            this.state.commentsData.map((comment)=>
            <div className="container">
                <h4>{comment.id}</h4>
                <article>{comment.name}</article>
                <h4>{comment.email}</h4>
                <hr/>
            </div>)
            :
            <p>No Comments found</p>}  
            </>
        )
    }
}
export default Comments
