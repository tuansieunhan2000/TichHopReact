import React, { Component } from 'react';

export default class ProductItem extends Component {
    render() {
        console.log(this.props.item);
        return (
          
                <div className="item mb-5">
  <div className="img position-relative overflow-hidden content-hover">
    <img className="w-100" src={`./img/${this.props.item.image}`}/>
    <div className="info d-flex justify-content-center align-items-center flex-column position-absolute text-white">
      <a className="d-block mt-3 mb-2 text-white text-decoration-none" style={{outline: "1px solid orange", padding :"xsxsxs5px" }} id="data.id" href="#">Chi tiết sản phẩm</a>
    </div>
  </div>
  <h4 className="text-center">{this.props.item.name}</h4>
  <p className="text-center">{this.props.item.price}</p>
</div>

        
        )
    }
}
