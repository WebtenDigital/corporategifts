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

import { db } from "~/utils/db.server";

import CTA from "~/components/CTA";
import { useEffect, useState } from "react";
import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import alldata from "~/sitedata/sitedata";

type LoaderData={
  id: string 
  product_name: string 
  category: string
  image_url: string
}

//BACKEND
export const loader:LoaderFunction=async function() {
    const data=db.product.findMany();
    return data;
}


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
];


export default function Index() {
  const productdata:LoaderData[]=useLoaderData();

  const [currentIndex, setCurrentIndex]=useState(0);

  let heroitem=herodata[currentIndex];

  useEffect(()=>{
    const intervalid=setInterval(()=>{
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
                  {/* pressure */}
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

      {/* POPULAR PRODUCTS */}
      <section className="py-10 w-11/12 mx-auto lg:py-2">
        <h2 className="text-red-500 uppercase text-sm font-black tracking-tight lg:mt-16">What We Make</h2>
        <div className="lg:w-11/12 lg:flex lg:justify-between lg:items-end">
          <h1 className="text-4xl font-black lg:text-5xl">Popular Products</h1>
          <div className="hidden lg:block"><CTA title="See All" linkurl="/products"/></div>
        </div>
        
        <div className="w-10/12 mx-auto pt-8 grid grid-cols-2 gap-4 lg:w-full lg:grid lg:grid-cols-5 lg:pt-16">
          {
            productdata.slice(0,10).map(productitem=>{
              return(
                <Link to={`/products/${productitem.id}`} className="mb-4 lg:mb-8">
                  <div className="p-2 h-28 w-28 bg-gray-100 rounded-2xl lg:h-40 lg:w-40 lg:rounded-3xl">
                    <img src={productitem.image_url} alt={productitem.product_name} className=""/>
                  </div>
                  <p className="pt-2 font-archivo font-bold uppercase">{productitem.product_name}</p>
                  <p className="text-sm text-gray-400 lowercase">{productitem.category}</p>
                </Link>
              )
            })
          }
        </div>
        <div className="w-10/12 mx-auto pt-10 lg:hidden"><div className="w-5/12 px-4 py-2 bg-gray-200 rounded-lg"><CTA title="See All" linkurl="/products"/></div></div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-10 my-10 bg-[#FAD355] lg:py-20">
        <div className="w-11/12 mx-auto">
          <h2 className="text-red-600 uppercase text-sm font-black tracking-tight">Our Services</h2>
          <h1 className="text-4xl font-black lg:text-5xl">What We Do</h1>
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-2 gap-4 items-end lg:flex lg:gap-28">
          {
            alldata.servicedata.map(serviceitem=>{
              return(
                <Link to="/services" className="mb-4">
                  <div className="pb-3 flex justify-center lg:pb-6"><img src={serviceitem.image_url} alt={serviceitem.service_name} className={serviceitem.sizing}/></div>
                  <p className="w-10/12 mx-auto py-1 text-center text-sm bg-white text-[#FAD355] font-bold rounded-lg uppercase lg:w-full lg:px-4 lg:hidden">{serviceitem.service_name}</p>
                  <div className="hidden lg:block lg:flex items-center py-1 px-4 text-[#FAD355] bg-white rounded-xl">
                    <p className="uppercase font-bold">{serviceitem.service_name}</p>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </section>
    </main>
  );
}