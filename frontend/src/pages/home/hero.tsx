import type { FC } from "react";

const Hero:FC = () => {
  return (
    <div className="hero min-h-[20vh] md:h-[30vh]  grid place-items-center rounded-3xl p-5">


        <div className="text-white text-center">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-5">Tripster ile konaklama rezervasyonu</h1>
             <p className="md:text-lg lg:text-xl">Dünya çapında 
              <b> 1,340,076</b> oda seni bekliyor! 
            </p>
        </div>
      
    </div>
  )
}

export default Hero;
