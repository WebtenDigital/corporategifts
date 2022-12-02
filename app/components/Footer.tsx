import { Link } from "@remix-run/react"
import logo from "../../public/images/logo.png"

export default function Footer() {
  return (
    <main className="pl-2 pr-8 bg-gray-900">
        <div id="footer-holder" className="w-11/12 mx-auto py-12 flex items-start justify-between lg:pt-20">
            <div id="left" className="w-5/12 lg:w-3/12">
                <h2 className="text-2xl text-[#FAD355] font-black uppercase lg:text-3xl lg:pb-8">Menu</h2>
                <div id="logo" className="pb-2 lg:pb-4">
                    <img src={logo} alt="cgl-logo"/>
                </div>
                <div className="text-white font-semibold">
                    <div className="pb-3 lg:pb-4 lg:text-lg"><Link to="/about">About</Link></div>
                    <div className="pb-3 lg:pb-4 lg:text-lg"><Link to="/services">Services</Link></div>
                    <div className="pb-3 lg:pb-4 lg:text-lg"><Link to="/product">Products</Link></div>
                    <div className="pb-3 lg:pb-4 lg:text-lg"><Link to="/contact">Contact</Link></div>
                </div>
                <div id="socials-mobile" className="pt-12 flex items-center gap-1 lg:hidden">
                    <div id="facebook">
                        <a href="https://facebook.com/corporategiftslimited" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg></a>
                    </div>
                    <div id="twitter">
                        <a href="https://twitter.com/corporategiftslimited" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg></a>
                    </div>
                    <div id="linkedin">
                        <a href="https://linkedin.com/corporategiftslimited" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg></a>
                    </div>
                </div>
            </div>
            <div id="right / lg--middle" className="w-7/12 lg:pr-8 lg:w-5/12">
                <h2 className="text-2xl text-[#FAD355] font-black uppercase lg:text-3xl  lg:pb-8">Contacts</h2>
                <div className="text-white">
                    <h3 className="text-lg font-bold lg:text-xl">Email</h3>
                    <p className="text-sm lg:text-base">info@corporategiftslimited.com</p>
                </div>
                <div className="py-4 text-white lg:py-6">
                    <h3 className="text-lg font-bold lg:text-xl">Call</h3>
                    <p className="text-sm lg:text-base">+256 393 217204, +256 772 487965</p>
                </div>
                <div className="text-white">
                    <h3 className="text-lg font-bold lg:text-xl">Location</h3>
                    <p className="text-sm lg:text-base">Plot 1A Commercial Lane, Lower Naguru East, Nakawa Division, Kampala</p>
                </div>      
                <p className="pt-7 text-white text-sm lg:hidden">&copy; Corporate Gifts Limited</p>          
            </div>
            <div id="lg--right" className="hidden lg:block lg:w-3/12">
                <h2 className="text-2xl text-[#FAD355] font-black uppercase lg:text-3xl lg:pb-8">Request Quote</h2>
                <div id="form" className="py-2">
                    <form>
                        <div className="pt-4 flex">
                            <input type="text" placeholder="Email" className="border-b border-white bg-gray-900 focus:outline-none text-white"/>
                            <button type="submit" className="h-10 w-10 rotate-45 border-2 border-white rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-9 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                <div id="socials--lg" className="hidden lg:block pt-12 lg:flex items-center gap-5">
                    <div id="facebook">
                        <a href="https://facebook.com/corporategiftslimited" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-white" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg></a>
                    </div>
                    <div id="linkedin">
                        <a href="https://twitter.com/corporategiftslimited" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-white" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg></a>
                    </div>
                    <div id="linkedin">
                        <a href="https://linkedin.com/corporategiftslimited" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-white" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg></a>
                    </div>
                </div>
                <p className="hidden lg:block pt-7 text-white lg:pt-12">&copy; Corporate Gifts Limited</p>
            </div>
        </div>
    </main>
  )
}
