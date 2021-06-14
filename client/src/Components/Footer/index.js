import React, { Component } from 'react'
import "./main.css";
 class Footer extends Component {
    render() {
        return (
            <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <h6>Address</h6>
        <ul>
          <li>      
            62 Đường Hai Bà Trưng,Phường 6 Thành phố Đà Lạt Lâm Đồng 660000
            Vietnam Business Hours
          </li>
        </ul>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <h6>Business Hours</h6>
        <div className="wpb_wrapper">
          <p>
            <span className="text-large line-height-2">
              <span style={{color: '#c0aa83'}}>
                <strong>Monday:</strong></span>
              <strong style={{color: '#fff'}}>9:00 – 19:00</strong><br />
              <span style={{color: '#c0aa83'}}><strong>Tuesday:</strong>
              </span><strong style={{color: '#fff'}}> 9:00 – 19:00</strong><br /> <span style={{color: '#c0aa83'}}><strong>Wednesday:</strong></span> <strong style={{color: '#fff'}}>9:00 – 19:00</strong><br /> <span style={{color: '#c0aa83'}}><strong>Thursday:</strong></span> <strong style={{color: '#fff'}}>9:00 – 19:00</strong><br /> <span style={{color: '#c0aa83'}}><strong>Friday:</strong></span> <strong style={{color: '#fff'}}>9:00 – 19:00</strong><br /> <span style={{color: '#c0aa83'}}><strong>Saturday:</strong> </span><strong style={{color: '#fff'}}>11:00 – 16:00</strong><br /> <span style={{color: '#c0aa83'}}><strong>Sunday:</strong></span> <strong style={{color: '#fff'}}> CLOSED</strong></span></p></div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <h6>Connect with us</h6>
        <ul>
          <li>
            <a href="https://www.facebook.com/Piccolocoffeeandfunny"><i className="Connect fab fa-facebook-f" /> Facebook</a>
          </li>
          <li>
            <a href="#"><i className="Connect fab fa-twitter" /> Twitter</a>
          </li>
          <li>
            <a href="https://piccolocoffeefunny.business.site/"><i className="Connect fab fa-google-plus-g" /> Google +</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="copyright">
      <p className="text-white">
        2021 © Coffee Shop/
        <a href="#">Web design by Puta2k</a>
      </p>
    </div>
  </div>
</footer>

          
        )
    }
}
export default Footer