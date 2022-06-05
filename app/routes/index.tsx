import Nav from "~/components/Nav";
// images
import hamper from "../../public/images/hero-hamper-tp.png"
import bottle from "../../public/images/bottle-tp.png"
import backpack from "../../public/images/backpack-tp.png"

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
}

const herodata:Hero[]=[
  {
    mainheading:"We make and supply gifts",
    product1img: hamper,
    product1style: "-top-7",
    product1name: "Gift Hampers",
    product1color: " bg-[#FAD355]",
    product2img: backpack,
    product2style: "mt-4",
    product2color: " bg-[#A274DA]",
    product3img: bottle,
    product3style: "mt-8",
    product3color: " bg-[#75D978]"

  }
]


export default function Index() {
  return (
    <main className="pb-96">
      <section id="hero" className="bg-gray-50">
        <div className="w-11/12 mx-auto"><Nav/></div>
        <div id="hero-holder" className="w-11/12 mx-auto pt-8 pb-10">
          <h2 className="text-red-500 uppercase font-black tracking-tight">We are corporate gifts limited</h2>
          {
            herodata.slice(0,1).map(heroitem=>{
              return (
                <div>
                  <h1 className="pt-2 text-5xl font-black">{heroitem.mainheading}</h1>
                  <div id="the images" className="pt-16 flex items-end">
                    <div className={"relative h-48 w-6/12 rounded-tr-3xl"+heroitem.product1color}>
                      <div className={"absolute "+heroitem.product1style}>
                        <img src={heroitem.product1img}/>
                        <p className="py-2 text-center text-gray-700 font-archivo font-bold">{heroitem.product1name}</p>
                      </div>
                      </div>
                    <div className={"w-4/12 h-36 rounded-tr-3xl"+heroitem.product2color}>
                      <div className={""+heroitem.product2style}><img src={heroitem.product2img}/></div>
                    </div>
                    <div className={"w-2/12 h-28 rounded-tr-3xl"+heroitem.product3color}>
                      <div className={""+heroitem.product3style}><img src={heroitem.product3img} className=""/></div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </main>
  );
}