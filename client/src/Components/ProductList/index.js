import React, { Component } from "react";
import ProductItem from "../ProductItem";

class ProductList extends Component {
  render() {
    return (
      <section className="new">
        <div className="container">
          <h1>
            <a id="newIn">MY MENU</a>
          </h1>
          <div className="row">
                {
                    this.props.productList.map((item, index)=>{
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <ProductItem item ={item}/>
                        </div>
                    })
                }
             
          </div>
        </div>
      </section>
    );
  }
 
}

export default ProductList;
