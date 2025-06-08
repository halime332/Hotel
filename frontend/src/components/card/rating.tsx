import type { FC } from "react";


interface Props {
  data:number;
  expand?:boolean;
}

const Rating:FC<Props> = ({data,expand}) => {

  //rek belirle 
  const color = data >= 4.7 ? "bg-blue-500": data >= 4 ? "bg-green-500":
    data >= 3 ? "bg-yellow-500": "bg-red-500";

   const text = data >= 4.7 ? "Olağanüstü": data >= 4 ? "Güzel":
    data >= 3 ? "İyi": data>= 2 ?  "Kötü": "Çok Kötü"
  

  return (

    <div>
        <span className={`${color} p-2 rounded-lg text-white font-bold w-fit `}>
          <span>{data}</span>

          {expand && <span className="font-seibold text-lg ms-2">{text}</span>}
        </span>
    </div>
  );
};

export default Rating;
