import React from "react";
import About2 from "../About2/About2";

const About =()=>{
    return(
       
    <div>
           <div  style={{ backgroundImage: `url("https://i.pinimg.com/originals/a7/61/80/a76180d2cb9f8116574f5091102742a9.jpg ") ` }}>
          <div className="hero min-h-screen bg-base-200  " >
<div style={{ backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/196/426/494/background-bad-breaking-yellow-wallpaper-preview.jpg ") ` }} className="rounded-lg h-[50%] w-[70%]">
<div className="hero-content flex-col lg:flex-row ml-20 mt-10 ">
    <img  src="https://upload.wikimedia.org/wikipedia/en/8/87/Breaking_Bad_season_3_DVD.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div className="ml-32">
      <h1 className="text-5xl font-bold">Best Shows!</h1>
      <p className="py-6 hover:text-red-500	text-xl font-semi-bold">Breaking Bad is an American crime drama television series created and produced by Vince Gilligan for AMC. Set and filmed in Albuquerque, New Mexico, the series follows Walter White (Bryan Cranston), an underpaid, dispirited high-school chemistry teacher struggling with a recent diagnosis of stage-three lung cancer.</p>
      <button className="btn bg-[#00ab41] w-40">Get Started</button>
    </div>
  </div>
</div>
</div>
</div>
<About2></About2>
    </div>
      
      
    )
}

export default About;