import gifts from '../images/hamp-tp.png'
import branding from '../images/coffee-tp.png'
import sign from '../images/road-tp.png'
import vest from '../images/jacket-tp.png'



type Service={
  service_name: string
  image_url: string
  sizing: string
}

const servicedata:Service[]=[
  {
    service_name: "Gifts",
    image_url: gifts,
    sizing: "h-28 lg:h-40"
  },
  {
    service_name: "Branding",
    image_url: branding,
    sizing: "h-28 lg:h-36"
  },
  {
    service_name: "Signage",
    image_url: sign,
    sizing: "h-28 lg:h-36"
  },
  {
    service_name: "Health & Safety",
    image_url: vest,
    sizing: "h-28 lg:h-36"
  }
]

const alldata={servicedata}

export default alldata;