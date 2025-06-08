import {  type FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "../../utils/servis";
import type { Place } from "../../types";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";




const List:FC = () => {

  //urldeki parametreleri al 
   const [params]=useSearchParams();
   const paramsObj =Object.fromEntries(params.entries());

   console.log(paramsObj);

  //api isteği 
  const {isLoading,error,data,refetch} = useQuery<Place[]>({
  queryKey:["places", paramsObj], //bağımlılık dizis
  queryFn:() => getPlaces(paramsObj),
  retry:3,
 });
 
  

   return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Yakınınızdaki Lokasyonlar</h1>

      <div className="grid gap-5 mt-5">
         {isLoading?
          <Loader designs="my-20"/> :
           error ? <Error info={error} refetch={refetch}/> :
           <div> {data?.map((place=><Card key={place.id} place={place}/>))}</div>}
      </div>
    </div>
  )
};

export default List;
