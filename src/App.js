import React, { Component } from 'react';
import M from 'materialize-css';


class App extends Component {

  componentDidMount(){
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems,{});
  }

  render() {
    return (
      <div className="row">
          <div className="carousel">
            <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" alt="img" /></a>
            <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" alt="img" /></a>
            <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" alt="img" /></a>
            <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" alt="img" /></a>
            <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" alt="img" /></a>
          </div>
      </div>
    )
  }
}

export default App;
