import React, { Component } from 'react'
import productService from '../../services/productService';

export class ProductsList extends Component {
   constructor(props)
   {
       super(props);
       this.state={
           products:[]
       }
   }
   componentDidMount(){
    productService.getProducts().then((response)=>{
        this.setState({products:response.data});
        console.log({products:response.data})
           });
    }
    
    render(props) {
        return (
            
            <div className="productList">
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>product Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map(
                                
                                (product)=>{
                                    return( 
                                        <tr key={product.productId}>
                                            <td>{product.productName}</td>
                                            <td>{product.productDescription}</td>
                                            <td>{product.productPrice}</td>
                                        
                                        </tr>
                                    )
                                }
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ProductsList
