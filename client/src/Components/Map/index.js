import React, { Component } from 'react'

class Map extends Component {
    render() {
        return (
<div className="map mt-5">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4401891814796!2d108.4308643148116!3d11.943995391535811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31711356c013ca37%3A0x33cb75f1626cb558!2sPiccolo%20Coffee%20%26%20Funny!5e0!3m2!1svi!2s!4v1619509045782!5m2!1svi!2s" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
</div>


        )
    }
}
export default Map;