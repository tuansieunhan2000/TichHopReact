import React, { Component } from 'react'
import ProductList from '../../Components/ProductList'


import Axios from "axios";
import {connect} from "react-redux"
import Map from '../../Components/Map';
import Footer from '../../Components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../Components/Header';

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <Header/>
       
                <ProductList productList={this.props.productList}/>
                <Map/>
                <Footer/>
            </div>
        )
    }
    componentDidMount(){
        Axios({
            method :"GET",
            url :"http://localhost:5000/",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then((res)=>{
            this.props.dispatch({
                type :"FETCH_PRODUCT",
                payload : res.data
            })
        }).catch(error => {
            if (!error.response) {
                // network error
                this.errorStatus = 'Error: Network Error';
            } else {
                this.errorStatus = error.response.data.message;
            }
          })
    
    }
}
const MapStateToProps =state=>({
  productList : state.product.products,

})
export default connect(MapStateToProps)(HomeScreen)