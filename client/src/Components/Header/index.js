import React, { Component } from 'react'
import "./main.css";

export default class Header extends Component {
    render() {
        return (
           <header className="headerAll" id="myHeader">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <i className="fa fa-phone text-white" />
        <span className=" font-weight-bold pr-2 text-white">090 144 48 67</span>
      </div>
      <form action="/search?id=#newIn" method="get">
        <div className="form-group d-flex flex-row ">
          <input type="text" className="form-control transparent-input mt-3 " name="q" id aria-describedby="helpId" placeholder="Nhập vào tên sản phẩm" size={50} />
          <button type="submit" className="btn btn-primary-outline text-white mt-3"><i className="fa fa-search " /></button>
        </div>
      </form>
    </div>
    <nav className="navbar navbar-expand-lg navbar-dark py-0 row">
      <a className="navbar-brand py-0 col-8" href="/">
        <span style={{fontFamily: '"Dancing Script", cursive', fontSize: 40}}>Piccolo</span>
      </a>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto border-bottom">
          <a className="nav-link text-white px-4 position-relative" href="/">HOME</a>
          <a className="nav-link text-white px-4 position-relative" href="/layout/products">MENU</a>
          <a className="nav-link text-white px-4 position-relative" href="https://tinyurl.com/yfr7tj74">RATE US!</a>
        </div>
      </div>
    </nav>
  </div>
</header>

        )
    }
}
