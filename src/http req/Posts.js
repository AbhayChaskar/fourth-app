import React, { Component } from 'react'

export class Posts extends Component {
    state={postData:[]};
    componentDidMount(){
        const URL="https://jsonplaceholder.typicode.com/posts";
        fetch(URL)
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            this.setState({postData:data});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        return (
            <>
            <h2>Latest Posts</h2>
            {this.state.postData.length>0?
            this.state.postData.map((post)=>
            <div className="container">
                <h4>{post.title}</h4>
                <article>{post.body}</article>
                <hr/>
            </div>)
            :
            <p>No Posts found</p>}  
            </>
        )
    }
}
export default Posts
