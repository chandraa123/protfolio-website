import React from 'react'
import "./Slide.css";
function Slide() {
    return (
        
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB658235929_.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/LTC/LTC-hero---March_1500x600._CB657076340_.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/1499store/2021/Feb/Hindi/Header_1500x600eng._CB660976519_.jpg" alt="Third slide"/>
    </div>
    </div>
  </div>

    );
}

export default Slide;
