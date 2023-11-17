import React from 'react';
import Banner from "../components/banner/banner";
import BannerImage from "../assets/img/banner.jpg";
import Slider from '../components/Slider';
// import pharmacy from '../img/phamacy.jpg'

function Home() {
  return (
    <div>
       <Banner img={BannerImage} h3={'Great Service. Lower Prices. Free Delivery.'} h6={'Great Service. Lower Prices. Free Delivery. Your Go-to Place for Prescriptions! We are an independently owned pharmacy located in Mesquite, Texas. Our pharmacy is staffed by highly trained pharmacists and pharmacy technicians. '} altAttr={"Text"} />
            <Slider />
            {/* <img src={pharmacy} alt="Pharmacy" /> */}

    </div>
  );
}

export default Home;
