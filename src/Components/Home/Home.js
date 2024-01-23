import React from "react";
import Banner from "../Banner/Banner";
import Shows from "../Shows/Shows";
import About from "../About/About";


const Home =()=>{
    return(
        <div className="bg-[#343434]">
            <Banner></Banner>
          <Shows></Shows>
          <About ></About>
        </div>
    )
}

export default Home;