import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { useParams } from "react-router-dom";
import { getPlace } from "../../utils/servis";


const Detail:FC = () => {
  const {id}=useParams();

   const {isLoading,error,data}=useQuery({
     queryKey:["place"],
     queryFn:()=>getPlace(id as string),
   });

   
   console.log(isLoading,error,data);

  return (
    <div>
      Detail
    </div>
  )
};

export default Detail;
