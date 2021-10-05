import React, { Component } from 'react'
// import json from '../server/products.json'

export class Prooducts extends Component {
    constructor(props){
        super(props);
        this.state={itemData:[],len:'',pname:'',price:'',quantity:''};
    }
    handler=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    componentDidMount(){
        const URL="http://localhost:3000/Products";
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({itemData:data})
        })
    }
    addCart=(pid)=>{
        // alert(pid);
        if(sessionStorage.getItem('mycart')!=undefined){
            let arr=JSON.parse(sessionStorage.getItem('mycart'));
            if(arr.includes(pid))
            {
                alert("Product already added");
            }
            else{
                arr.push(pid);
                sessionStorage.setItem('mycart',JSON.stringify(arr));
                this.setState({len:arr.length})
                // alert("Product Added to cart");
            }
        }
        else{
            let arr=[];
            arr.push(pid);
            sessionStorage.setItem('mycart',JSON.stringify(arr));
        }
    }
    addProduct=(event)=>{
        event.preventDefault();
        let formData={pname:this.state.pname,price:this.state.price,quantity:this.state.quantity};
        const URL="http://localhost:3000/Products/";
        fetch(URL,{
            method:"POST",
            body:JSON.stringify(formData),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(res=> res.json())
        .then(json=>{
            alert("Product Added");
            
            fetch(URL)
            .then(res=>res.json())
            .then(data=>{
                alert("product added")
                console.log(data)
                this.setState({itemData:data})
            })
        })
    }
    render() {
        // console.log(json.Products)
        return (
            <>
            <div className="container">
                  <h2> Add Product</h2>
                  <form onSubmit={this.addProduct}>
                      <div className="form-group">
                        <label>Pname</label>
                        <input type="text" name="pname" className="form-control" onChange={this.handler}/>
                      </div>
                      <div className="form-group">
                        <label>Price</label>
                        <input type="text" name="price" className="form-control" onChange={this.handler}/>
                      </div>
                      <div className="form-group">
                        <label>Quantity</label>
                        <input type="text" name="quantity" className="form-control" onChange={this.handler}/>
                      </div>
                        <input type="submit" value="Submit" className="btn btn-success"/>
                  </form>
            </div>
                <div className="row">
                <nav class="nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">About</a>
                <a class="nav-link" href="#">Cart {this.state.len}</a>
                <a class="nav-link">Disabled</a>
                </nav>
                {this.state.itemData.map(item=>
                <div className="col-sm-4">
                    <div className="card bg.dark">
                        {console.log(item)}
                        {/* <img src={`${item.images}`} className="card-img-top" alt="Happy"/> */}
                        <div className="card-body text-center">
                            <h5 className="card-title">{item.pname}</h5>
                            {/* <p className="card-text">Id:{item.pid}</p> */}
                            <p className="card-text">Price: {item.price} & Quantity: {item.quantity}</p>
                            {/* <a href="#" className="btn btn-primary" onClick={()=>this.addCart(item.pid)}>Add in cart</a> */}
                        </div>
                    </div>
                </div>
                )}
            </div>
            </>
        )
    }
}

export default Prooducts
