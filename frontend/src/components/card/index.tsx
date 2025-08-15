import type { FC } from "react";
import { Link } from "react-router-dom";
import type { Place } from "../../types";
import Status from "./status";
import Rating from "./rating";

interface Props {
    place: Place;
}

const Card: FC<Props> = ({place}) => {
  return (
    <Link to={`/place/${place.id}`} className="border border-zinc-300 shadow rounded-md transition-all p-4 gap-3 grid grid-cols-3 min-h-[300px] hover:shadow-md" >
    
    {/* resim */}
    <div>
        <img src={place.image_url} alt={place.name} className="size-full object-cover rounded-lg"/>
    </div> 

    <div className="col-span-2 flex flex-col justify-between">

        {/* içerik */}
     <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg">{place.name} </h1>
            <Status availability={place.availability}/>
        </div>

        <p>{place.location} </p>
     
     <div className="flex gap-4 mb-2">
        {place.amenities.slice(0, 2).map((i: string) => (
         <span key={i}
          className="border p-1 px-2 rounded-md border-zinc-200">
          {i} 
          </span>
        ))}
     </div>

      <Rating rating={place.rating} expanded/>
     </div> 

     {/* fiyat bilgisi */}

     <div className="flex flex-col items-end">
        <span className="text-2xl font-bold">${place.price_per_night} </span>
        <span className="text-xs text-gray-400">Vergiler ve Ücretler dahildir</span>
     </div>
   </div> 
     
    </Link>
  )
}

export default Card;