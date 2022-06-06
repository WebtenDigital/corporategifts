import gifts from '../../public/images/gifts-vector-tp.png'
import branding from '../../public/images/branding-tp.png'
import sign from '../../public/images/sign-tp.png'
import vest from '../../public/images/vest-tp.png'



type Service={
  service_name: string
  image_url: string
  sizing: string
}

const servicedata:Service[]=[
  {
    service_name: "Gifts",
    image_url: gifts,
    sizing: "h-28 w-28 lg:h-48 lg:w-48"
  },
  {
    service_name: "Branding",
    image_url: branding,
    sizing: "h-16 w-16 lg:h-36 lg:w-36"
  },
  {
    service_name: "Signage",
    image_url: sign,
    sizing: "h-28 w-28 lg:h-36 lg:w-36"
  },
  {
    service_name: "Health & Safety",
    image_url: vest,
    sizing: "h-20 w-20 lg:h-36 lg:w-36"
  }
]

const alldata={servicedata}

export default alldata;