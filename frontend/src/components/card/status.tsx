import type { FC } from "react";
import { MdEventAvailable as Fail } from "react-icons/md";
import { CgUnavailable as Ok} from "react-icons/cg";


interface Props {
  data:boolean;
  expand?:boolean;
}

const Status:FC<Props> = ({data ,expand}) => {
  return (
    <div className={`flex items-center gap-4 border border-zinc-200 p-2 rounded-md ${data ? "bg-green-100": "bg-red-100"}`}>

     {data ? <Fail className="text-xl text-green-700"/> :<Ok className="text-xl text-red-700"/> }


     {expand && <p className="font-bold">{data ? "Şuan Konaklanabilir": "Konaklamak için müsait değildir"}</p>}
    </div>
  )
};

export default Status;
