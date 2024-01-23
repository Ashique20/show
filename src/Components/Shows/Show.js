import React from "react";
import { useNavigate } from "react-router-dom";

const Show =({service})=>{
    const {show} = service;
    const navigate = useNavigate()
    const Detail=()=>{
        navigate(`/detail/${show.id}`)
    }
    return(
        <div >
            <div className="card w-80  bg-base-100 shadow-xl  bg-secondary mt-20 cursor-pointer  shadow-lg transition duration-700 hover:scale-110	">
  <figure ><img  src={show?.image?.original} alt="Shoes" /></figure>
  <div className="card-body ">
    <h2 className="font-bold text-xl text-[#E0115F]">{show.name}</h2>
    <h2 className="font-bold text-xl text-[#E0115F]">{show?.genres[0]}</h2>

    <p className=" text-white">Type: {show.type}</p>
    <p className="text-white">  Language:  {show.language}</p>
    <p className="text-white">Rating: {show.rating?.average}</p>
    <div className="card-actions justify-end">
      <button onClick={Detail}  className="btn bg-[#E0115F] hover:bg-[#FF007F] mr-20 mt-10 w-20 shadow-lg transition duration-600 hover:scale-110">Book</button>
    </div>
  </div>
</div>
        </div>
    )
}

export default Show;