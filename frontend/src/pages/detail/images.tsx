import type { FC } from "react"


interface Props{
    image:string;
}
const Images:FC<Props> = ({image}) => {
  return (
    <div className="grid lg:grid-cols-2 mt-4 gap-4 w-full">
      <div className="w-full">
        <img src={image} className="rounded-lg object-cover size-full"/>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <img src="/image-7.jpg" className="object-cover rounded-lg"/>
        <img src="/image-5.jpg" className="object-cover rounded-lg" />
        <img src="/image-6.jpg"  className="object-cover rounded-lg"/>
        <img src="/image-9.jpg" className="object-cover rounded-lg" />
      </div>
    </div>
  )
};

export default Images;
