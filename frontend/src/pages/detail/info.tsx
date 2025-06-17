import type { FC } from "react";
import type { Place } from "../../types";
import Rating from "../../components/card/rating";


interface Props{
    place:Place;
}


const Info:FC<Props> = ({place}) => {
  return (
    <div>
        <div className="flex my-5 justify-between">
            <div>
                <h1 className="text-2xl lg:text-3xl font-sembold">{place.name}</h1>
                <p className="text-zinc-600">{place.description}</p>
            </div>
            <div>
                <Rating data={place.rating}/>
            </div>
        </div>

        
    </div>
  )
};

export default Info;
