import { useQuery } from "@tanstack/react-query";
import { Children, type FC } from "react";
import { useParams } from "react-router-dom";
import { getPlace } from "../../utils/servis";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Return from "./return";


const Detail:FC = () => {
  const {id}=useParams();

   const {isLoading,error,data,refetch}=useQuery({
     queryKey:["place"],
     queryFn:()=>getPlace(id as string),
   });

   
  if(isLoading)
    return(
    <Children>
      <Loader/>
    </Children>
      
  
  );

  if(error)
    return(<div>
      <Return/>
      <Error  info={error} refetch={refetch}/>
    </div>
  );


  if(!data)  return;
  
  return (
  
    <div className="container">
        <Return/>
     
     <div>
      <h1>{data.name}</h1>
    </div>

    </div>
  )
};

export default Detail;
