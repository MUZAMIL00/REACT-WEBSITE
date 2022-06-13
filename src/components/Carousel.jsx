import React, { Component } from "react";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import Carousel from "react-spring-3d-carousel";

import { config } from "react-spring";


export default class Example extends Component {
  state = {
    goToSlide: 4,
    offsetRadius: 5,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: 1,
      content: <img src={super1}alt="1" />
    },
    {
      key: 2,
      content: <img src={super2}alt="2" />
    },
    {
      key: 3,
      content: <img src={super4} alt="3" />
    },
    {
      key: 4,
      content: <img src={super3}alt="4" />
    },
    {
      key: 5,
      content: <img src={super3} alt="5" />
    },
    {
      key: 6,
      content: <img src={super4}alt="6" />
    },
    {
      key: 7,
      content: <img src={super1}alt="7" />
    },
    {
      key: 8,
      content: <img src={super1} alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  render() {
    return (
      <div style={{ width: "80%", height: "300px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}

// export default class Carousel extends Component {
//     render() {
//         const settings = {
//             dots: true,
//             autoplay: true,
//             infinite: true,
//             slidesToShow: 3,
//             slidesToScroll: 1
//           };
//           return (
//             <div className="container">
//               <Slider {...settings}>
//               <div><img src={super1} alt="Credit to Joshua Earle on Unsplash"/></div>
//               <div><img src={super1} alt="Credit to Alisa Anton on Unsplash"/></div>
//               <div><img src={super1} alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
//               <div><img src={super1} alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
//               <div><img src={super1} alt="Credit to Richard Nolan on Unsplash"/></div>
//               <div><img src={super1} alt="Credit to Cristina Gottardi on Unsplash"/></div>
//               </Slider>
//             </div>
//         );
//     }
// }