import Nav from "~/components/Nav";
// images
import hamper from "../../public/images/hero-hamper-tp.png"
import bottle from "../../public/images/bottle-tp.png"
import roadsign from "../../public/images/road-sign-tp.png"
import backpack from "../../public/images/backpack-tp.png"
import billboard from "../../public/images/mtn-billboard.png"
import heroplaque from "../../public/images/hero-plaque-tp.png"
import heroboots from "../../public/images/hero-boots-tp.png"
import herowear from "../../public/images/hero-wear-tp.png"
import heroseal from "../../public/images/hero-seal-tp.png"


import CTA from "~/components/CTA";
import { useEffect, useState } from "react";

type Hero={
  mainheading: string
  product1img: string
  product1name: string
  product1style: string
  product1color: string
  product2img: string
  product2style: string
  product2color: string
  product3img: string
  product3style: string
  product3color: string 
  ctatitle: string
  ctaurl: string

}

const herodata:Hero[]=[
  {
    mainheading:"We make and supply gifts",
    product1img: hamper,
    product1style: "-top-7 lg:-top-20",
    product1name: "Gift Hampers",
    product1color: " bg-[#FAD355]",
    product2img: backpack,
    product2style: "mt-4",
    product2color: " bg-[#A274DA]",
    product3img: bottle,
    product3style: "mt-8",
    product3color: " bg-[#75D978]",
    ctatitle: "see all gifts",
    ctaurl: "#"
  },
  {
    mainheading:"Professional Branding and Signage",
    product1img: roadsign,
    product1style: "-top-10 lg:-top-20",
    product1name: "Road Signage",
    product1color: " bg-[#00D8B8]",
    product2img: billboard,
    product2style: "mt-4",
    product2color: " bg-[#FF6BB2]",
    product3img: heroplaque,
    product3style: "mt-8",
    product3color: " bg-[#FAD355]",
    ctatitle: "see our branding work",
    ctaurl: "#"
  },
  {
    mainheading:"Health and Safety Equipment",
    product1img: heroboots,
    product1style: "-top-7 lg:-top-20",
    product1name: "Safety Footwear",
    product1color: " bg-[#4EBF85]",
    product2img: herowear,
    product2style: "mt-4",
    product2color: " bg-[#FAD355]",
    product3img: heroseal,
    product3style: "mt-8",
    product3color: " bg-[#A274DA]",
    ctatitle: "health & safety products",
    ctaurl: "#"
  }
]


export default function Index() {
  const [currentIndex, setCurrentIndex]=useState(0);

  let heroitem=herodata[currentIndex];

  useEffect(()=>{
    const intervalid=setInterval(()=>{
      console.log(currentIndex);
      if(currentIndex===2){
        setCurrentIndex(0);
      }
      else{
        setCurrentIndex(prevstate=>prevstate+1);
      }
    }, 5000);
    return ()=>{clearInterval(intervalid)};
  })

  return (
    <main className="pb-96">
      <section id="hero" className="bg-gray-50">
        <div className="w-11/12 mx-auto lg:pt-4"><Nav/></div>
        <div id="hero-holder" className="w-11/12 mx-auto pt-8 pb-10 lg:py-10">
          {
            <div className="lg:flex lg:relative">
              <div id="left" className="lg:w-5/12">
                <h2 className="text-red-500 uppercase font-black tracking-tight lg:mt-16">We are corporate gifts limited</h2>
                <h1 className="pt-2 text-5xl font-black lg:text-6xl">{heroitem.mainheading}</h1>
                <div className="hidden lg:block lg:absolute lg:bottom-4"><CTA title={heroitem.ctatitle} linkurl={heroitem.ctaurl}/></div>
              </div>
              {/* images */}
              <div id="the images - right" className="pt-16 flex items-end lg:w-7/12">
                <div className={"relative h-48 w-6/12 rounded-tr-3xl lg:h-80"+heroitem.product1color}>
                  <div className={"absolute "+heroitem.product1style}>
                    <img src={heroitem.product1img}/>
                    <p className="py-2 text-center text-gray-700 font-archivo font-bold lg:text-lg">{heroitem.product1name}</p>
                  </div>
                  </div>
                <div className={"w-4/12 h-36 rounded-tr-3xl lg:h-64"+heroitem.product2color}>
                  <div className={""+heroitem.product2style}><img src={heroitem.product2img}/></div>
                </div>
                <div className={"w-2/12 h-28 rounded-tr-3xl lg:h-40"+heroitem.product3color}>
                  <div className={""+heroitem.product3style}><img src={heroitem.product3img} className=""/></div>
                </div>
              </div>
              {/* cta + scroll-controller */}
              <div className="pt-8 flex items-center justify-between lg:absolute lg:right-0">
                <div className="lg:hidden"><CTA title={heroitem.ctatitle} linkurl={heroitem.ctaurl}/></div>
                <div className="flex items-center gap-1">
                  {/* left-button */}
                  <button className="hidden lg:block text-yellow-400" onClick={()=>{
                      if(currentIndex<herodata.length-1){
                        setCurrentIndex(prevstate=>prevstate+1);
                      }
                      else if(currentIndex>=herodata.length-1){
                        setCurrentIndex(0);
                      }              
                    }}                
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-12 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  <div className="text-sm">
                  <p className="flex items-center">
                    <p className="lg:text-lg">{currentIndex+1} / </p>
                    <span className="text-xl text-gray-500 font-bold lg:text-2xl">{herodata.length}</span>
                  </p>
                  </div>
                  {/* right-button */}
                  <button className="text-yellow-400" onClick={()=>{
                    if(currentIndex<herodata.length-1){
                      setCurrentIndex(prevstate=>prevstate+1);
                    }
                    else if(currentIndex>=herodata.length-1){
                      setCurrentIndex(0);
                    }              
                  }}                
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
          </div>
          }
        </div>
      </section>
    </main>
  );
}