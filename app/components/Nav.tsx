import { Link } from '@remix-run/react'
import logo from "../../public/images/logo.png"

type NavLink={
    linktext: string
    linkurl: string
}

const navlinks:NavLink[]=[
    {
        linktext: "home",
        linkurl: "/"
    },
    {
        linktext: "gifts",
        linkurl: "#"
    },
    {
        linktext: "services",
        linkurl: "/services"
    },
    {
        linktext: "about",
        linkurl: "/about"
    },
    {
        linktext: "contact",
        linkurl: "/contact"
    }
]

export default function Nav() {
  return (
    <main>
        {/* Menu for Mobile */}
        <div className='pt-2 flex items-center justify-between lg:hidden'>
            <Link to="/"><div className=''><img src={logo} alt="logo" className='w-12 rounded-lg'/></div></Link>
            <button id="burger menu" className='block'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>            
            </button>
        </div>

        {/* Menu for Lg */}
        <div className='hidden lg:block lg:flex items-center justify-between'>
            <div id="logo">
                <Link to="/"><div className=''><img src={logo} alt="logo" className='w-12 rounded-lg'/></div></Link>
            </div>
            <div id="mid-links" className='flex gap-16'>
                {
                    navlinks.slice(1,4).map(linkitem=>{
                        return(
                            <div className='px-4 py-2 text-gray-700 font-bold capitalize hover:bg-gray-200 hover:text-red-600 rounded-lg'><Link to={linkitem.linkurl}>{linkitem.linktext}</Link></div>
                        );
                    })
                }
            </div>
            <div id="contact" className='px-4 py-2 text-gray-700 font-bold capitalize bg-gray-200 hover:text-yellow-500 rounded-lg'>
                <Link to={navlinks[4].linkurl}>{navlinks[4].linktext}</Link>
            </div>
        </div>
    </main>
  )
}
