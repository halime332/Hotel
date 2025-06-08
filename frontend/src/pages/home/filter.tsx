import type { FC } from "react";
import { getPlaces } from "../../utils/servis";
import { useQuery } from "@tanstack/react-query";
import type { Place } from "../../types";
import { sortOptions } from "../../utils/constant";
import { useSearchParams } from "react-router-dom";


const Filter:FC= () => {
  const [params,setParams]=useSearchParams();
 //useQuery 'i 2.kez bu sayfadada çağırdık ama api 'a istek gitmio 2. kez
 //ardından gelen cevap önbellekte saklanıo daa sonra yapılan bütün isteklerde ön
 //bellekte tutulan bilgiler kullanılır
  const {isLoading,error,data} = useQuery<Place[]>({
  queryKey:["places"],
  queryFn:getPlaces,
  
 });

 //sadece benzersiz konum isimlerinden oluşan bir dizi oluştur
 const locations=[...new Set(data?.map((i)=>i.location))];

  //urle parametre ekler
  const handleChange =(name:string,value:string):void =>{
    params.set(name,value);
    setParams(params);
  };
 

  return (
    <form className="flex flex-col gap-4 lg:gap-10">
      <div className="field">
        <label>Nereye</label>

        {!isLoading ? (
          <select className="input"  defaultValue={params.get("location")|| "" }
           onChange={(e)=>handleChange("location",e.target.value)} 
            >
            <option value="">Seçiniz</option>
            {locations.map((i,key)=>(
              <option key={key} value={i}>{i}</option>
            ))}
          </select>
        ) :(
          <div className="h-[31px]"/>
        )
      }
      </div>

      <div className="field">
        <label>Konaklama yeri adına göre ara</label>
        <input type="text" placeholder="örn:Seaside Villa" className="input" onChange={(e)=>handleChange("location",e.target.value)} 
        defaultValue={params.get("title")|| "" }/>
      </div>

      <div className="field">
      <label>Sıralama Ölçütü </label>
      <select className="input" onChange={(e)=>
        handleChange("order",e.target.value)} 
         defaultValue={params.get("order")|| "" }> 
       {sortOptions.map((i,key)=>(
        <option key={key} value={i.value}>{i.label}</option>
       ))}
      </select>
    </div>

    <div className="flex justify-end">
      <button type="reset" className="bg-blue-500 p-1 px-4 text-white rounded-md w-fit">
        Filtreleri Temizle
      </button>
    </div>
    </form>
  )
};

export default Filter;
