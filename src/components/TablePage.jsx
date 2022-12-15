import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";



function TablePage() {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
  .then(res=>res.json())
  .then(data=>{setProducts(data);console.log("now =",products)})
    },[])
  
  console.log(products);
  return (<div id="wrapper">
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <div className="container-fluid">
                    <h3 className="text-dark mb-4"></h3>
                    <div className="tab-content" id="tabs">
                        <div className="tab-pane active" id="users">
                                <div className="card shadow">
                                <div className="card-header py-3">
                                    <p className="text-primary m-0 fw-bold">Items Info</p>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                        <table className="table my-0" id="dataTable">
                                            <thead>
                                                <tr>
                                                    <th>Item-Name</th>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                    <th>Rating</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                              
                                                    {products.map((el)=>{
                                                        return (
                                                        <tr>
                                                        <td><img className="rounded-circle me-2" width="30" height="30" src={el.image}/>{el.title}</td>
                                                        <td>{el.description}</td>
                                                        <td>{el.price}</td>
                                                        <td>{el.rating.rate}</td>
                                                    </tr>

                                                        )
                                                    })
                                                        
        }
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane active" id="items">
                                <div className="card shadow">
                                <div className="card-header py-3">
                                    <p className="text-primary m-0 fw-bold">Items Info</p>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="text-md-end dataTables_filter" id="dataTable_filter"><label className="form-label"><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                                        </div>
                                    </div>
                                    <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                        <table className="table my-0" id="dataTable">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Age</th>
                                                    <th>Register date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><img className="rounded-circle me-2" width="30" height="30" src="assets/img/avatars/avatar1.jpeg"/>Airi Satou</td>
                                                    <td>Laxman</td>
                                                    <td>33</td>
                                                    <td>2008/11/28</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <footer className="bg-white sticky-footer">
                <div className="container my-auto">
                    <div className="text-center my-auto copyright"><span>Copyright © E-commerce 2022</span></div>
                </div>
            </footer>
        </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
    </div>
  )
}

export default TablePage