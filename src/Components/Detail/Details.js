import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";



const Detail =()=>{
  const { id } = useParams();
  const [details, setDetail] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    // Save the form data to local storage
    localStorage.setItem("formData", JSON.stringify(data));
  };

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData) {
      // Set the form fields with the saved data
      Object.keys(savedFormData).forEach((field) => {
        setValue(field, savedFormData[field]);
      });
    }
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setDetail(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  // console.log(details)
        
       
    return(
        <div >
                    <div className="hero min-h-screen  bg-[#343434]" >
                    <div>
          <div className="hero min-h-screen   " >
<div bg-primary className="rounded-lg  w-[76%] shadow-xl bg-secondary text-white">
<div className="hero-content flex-col lg:flex-row ml-20 mt-10 ">
    <div>
    <img  src={details.image?.medium} className="max-w-sm rounded-lg shadow-2xl" />
    <h1 className="text-xl mt-10 ml-8 font-bold "> {details.name}!</h1>
    </div>
    <div className="ml-32">
      <p className="text-2xl">Ratings: {details.rating?.average}</p>
      <p className="py-6 	text-xl font-semi-bold">{details.summary}</p>
      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Book Now</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-[40%] min-h-full bg-base-200 text-base-content bg-primary">
     
    <div className="card card-compact w-96  bg-base-100 bg-secondary shadow-xl mt-20 ml-20">
  <figure><img className="h-96" src={details.image?.medium} alt="Shoes" /></figure>
  <div className="card-body bg-secondary ">
    <h1 className="text-2xl">{details.name}</h1>
    <h2 className="card-title">{details?.status}</h2>
    <p className="text-xl">At {details.schedule?.time} on {details.schedule?.days}</p>
    <p>Runtime: {details.runtime} minutes</p>
    <p> {details.network?.country?.name} </p>
    <form className="text-black" onSubmit={handleSubmit(onSubmit)}>
     
     <input  {...register("email", { required: true })} type="text" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />

     
     
     <input  {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered input-accent w-full max-w-xs mt-10" />
    
     
     

      <input className="btn btn-primary mt-10 ml-24 w-24" type="submit" />
    </form>
   
  </div>
</div>
      
    </ul>
  </div>
</div>
    </div>
  </div>
</div>
</div>
</div>
</div>


        </div>
    )
}

export default Detail;