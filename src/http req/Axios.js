import React, { Component } from 'react'
import axios from 'axios';
const URL="http://localhost:3001/Employees";
export class Axios extends Component {
    constructor(props){
        super(props)
        this.state={
            dataList:[],
            ename:"",
            Sal:"",
            d:"",
            holid:"",
            id:"",
            x:1
        }
    }
    mainCall(){
        axios.get(URL)
        .then(
            res=>{
                this.setState({
                    dataList:res.data
                })
            }
        )
    }
    componentDidMount(){
       this.mainCall(); 
    }
    handler(event){
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    add(event){
        event.preventDefault();
        let upload={ename:this.state.ename,Department:this.state.d,Holidays:this.state.holid,Salary:this.state.Sal};
       axios.post(URL,upload);
        this.mainCall()
    }
    del(id){
        var curl=`${URL}/${id}`;
        axios.delete(curl);
        this.mainCall()
    }
    change(val){
        this.setState({
            ename:val.ename,
            Sal:val.Salary,
            d:val.Department,
            holid:val.Holidays,
            id:val.id,
            x:0
        });
        document.getElementById('ename').value=val.ename;
        document.getElementById('sal').value=val.Salary;
        document.getElementById('d').value=val.Department;
        document.getElementById('holid').value=val.Holidays;

    }
    put(){
        console.log(this.state.id)
         var newUrl=`${URL}/${this.state.id}`
        let update={ename:this.state.ename,Department:this.state.d,Holidays:this.state.holid,Salary:this.state.Sal};
        axios.put(newUrl,update);
        this.mainCall();
        this.mainCall();

        this.setState({
            x:1
        })
        document.getElementById('ename').value="";
        document.getElementById('sal').value='';
        document.getElementById('d').value='';
        document.getElementById('holid').value='';
    }
    render() {
        return (
            <>  
            <div className="p-2">
                
            </div>
            <table className="table table-hover  text-center mt-4">
            <thead>
                <tr className="table-dark">
                    <th>Emp. ID</th>
                    <th>Emp Name</th>
                    <th>Department</th>
                    <th>Leaves</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody className="fw-bold">
            {this.state.dataList.map((val,i)=>
                <tr key={i}>
                    <td>{val.id}</td>
                    <td>{val.ename}</td>
                    <td>{val.Department}</td>
                    <td>{val.Holidays}</td>
                    <td className="fst-italic fw-normal">{val.Salary}</td>
                    <td><button className="btn btn-danger mx-1" onClick={()=>this.del(val.id)}>Delete</button>
                    <button className="btn btn-success" onClick={()=>this.change(val)} >Update</button></td>
                </tr>
              )}
              <tr key="{i}">
                    <td>Id</td>
                    <td><input type="text" name="ename" id="ename" onChange={this.handler.bind(this)} placeholder="Emp Name" /></td>
                    <td><input type="text" name="d" id="d" onChange={this.handler.bind(this)} placeholder="Department" /></td>
                    <td><input type="text" name="holid" id="holid" onChange={this.handler.bind(this)} placeholder="Leaves" /></td>
                    <td className="fst-italic fw-normal"><input type="text" id="sal" name="sal" onChange={this.handler.bind(this)} placeholder="Salary" /></td>
                    <td>{this.state.x?
                        <button className="btn btn-info" onClick={this.add.bind(this)} >Add Data</button>:
                        <button className="btn btn-success" onClick={()=>this.put()} >Update</button>}</td>
                </tr>
                
            </tbody>
        </table>
                 
            </>
        )
    }
}

export default Axios
