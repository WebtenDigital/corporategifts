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
import richardoffice from "../../public/images/richardoffice.jpg"

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
                  {/* pressures */}
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

      {/* ABOUT US */}
      <section className="w-11/12 mx-auto lg:w-10/12 lg:flex lg:gap-10 lg:justify-between lg:py-16">
          <div id="left" className="hidden lg:block w-6/12 h-80 h-96">
            <img src={richardoffice} alt="printing and branding" className="h-full w-full object-cover rounded-xl shadow-xl hover:cursor-pointer"/>
          </div>
          <div id="right" className="lg:w-6/12">
            <h2 className="uppercase font-black tracking-tight">About Us</h2>
            <div className="relative">
            <h1 className="relative text-4xl text-red-500 font-black lg:hidden">We are <br/>a full-service branding and printing center.</h1>
            <h1 className="hidden lg:block lg:relative text-4xl text-red-500 font-black lg:text-5xl">We are a full-service gifts, branding and printing center.</h1>
              <div className="absolute right-0 bottom-1 lg:hidden">
                <svg className="h-10 w-10 fill-gray-200" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg"><path d="M240.6 194.1c1.9-30.8 17.3-61.2 44-79.8C279.4 103.5 268.7 96 256 96h-29.4l30.7-22c7.2-5.1 8.9-15.1 3.7-22.3l-9.3-13c-5.1-7.2-15.1-8.9-22.3-3.7l-32 22.9 11.5-30.6c3.1-8.3-1.1-17.5-9.4-20.6l-15-5.6c-8.3-3.1-17.5 1.1-20.6 9.4l-19.9 53-19.9-53.1C121 2.1 111.8-2.1 103.5 1l-15 5.6C80.2 9.7 76 19 79.2 27.2l11.5 30.6L58.6 35c-7.2-5.1-17.2-3.5-22.3 3.7l-9.3 13c-5.1 7.2-3.5 17.2 3.7 22.3l30.7 22H32c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h168.9c-5.5-9.5-8.9-20.3-8.9-32V256c0-29.9 20.8-55 48.6-61.9zM224 480c0 17.7 14.3 32 32 32h160V384H224v96zm224 32h160c17.7 0 32-14.3 32-32v-96H448v128zm160-288h-20.4c2.6-7.6 4.4-15.5 4.4-23.8 0-35.5-27-72.2-72.1-72.2-48.1 0-75.9 47.7-87.9 75.3-12.1-27.6-39.9-75.3-87.9-75.3-45.1 0-72.1 36.7-72.1 72.2 0 8.3 1.7 16.2 4.4 23.8H256c-17.7 0-32 14.3-32 32v96h192V224h15.3l.7-.2.7.2H448v128h192v-96c0-17.7-14.3-32-32-32zm-272 0c-2.7-1.4-5.1-3-7.2-4.8-7.3-6.4-8.8-13.8-8.8-19 0-9.7 6.4-24.2 24.1-24.2 18.7 0 35.6 27.4 44.5 48H336zm199.2-4.8c-2.1 1.8-4.5 3.4-7.2 4.8h-52.6c8.8-20.3 25.8-48 44.5-48 17.7 0 24.1 14.5 24.1 24.2 0 5.2-1.5 12.6-8.8 19z"/></svg>
              </div>
            </div>
            <p className="py-4 text-sm text-gray-800 text-justify lg:text-base lg:py-6">Set up in 2003, Corporate Gifts Limited is a printing, branding, embroidery company and major supplier of security products that handle all promotional and security needs from small, start-up enterprise – to global, multi-billion corporations. We also provide branded products to local councils, schools, charities, and sports clubs.</p>
            <div className="pt-2 lg:hidden">
              <img src={richardoffice} alt="printing and branding" className="rounded-xl shadow-xl hover:cursor-pointer"/>
            </div>
            <div className="pt-8 flex justify-center lg:hidden"><div className=" px-4 py-2 bg-gray-200 rounded-lg"><CTA title="About Us" linkurl="/about"/></div></div>
            <div className="hidden lg:block lg:flex items-end gap-4 justify-end">
              <CTA title="About Us" linkurl="/about"/>
              <div className=""><Link to="/contact" className="flex items-end font-bold text-red-500">
                <p>Contact Us</p>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link></div>
            </div>
          </div>
        </section>
    </main>
  );
}