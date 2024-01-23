import axios from "axios";
import React, { useEffect, useState }  from "react";
import Show from "./Show";

const Shows =()=>{
    const [services,setService] = useState([])


    useEffect(() => {
        axios
          .get(
            "https://api.tvmaze.com/search/shows?q=all"
          )
          .then((response) => {
            setService(response.data)
          })
          .catch((error) => console.log(error))
      }, []);

    
    console.log(services)
    return(
        <div className="sm:grid grid-cols-1 lg:grid grid-cols-3  mb-20 ml-40  mt-20 ">
           
           {
            services.map(service=><Show key={service.id} service={service}></Show>)
           }
        </div>
    )
}

export default Shows;