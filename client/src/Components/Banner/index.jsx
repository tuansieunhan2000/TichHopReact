import React, { Component } from 'react';
import './style.css'
class Banner extends Component {
    render() {
        return (
            <div style={{ 
                backgroundImage: `url("./img/slide/slide_1.jpg")` 
              }}>
                <section id="hero">
                <div className="hero-container">
                    <h3>Welcome to <strong>Piccolo coffee</strong></h3>
                </div>
            </section>
            </div>
        );
    }
}

export default Banner;
