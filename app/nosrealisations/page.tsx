import Navbar from "../composant/Navbar"
import {Playfair_Display} from "next/font/google"
import Footer from "../composant/Footer"
import Image from "next/image"
const playfair = Playfair_Display({
    subsets:["latin"],
    weight: ['400',"700"]
})
export default function activites(){
    return(
        <>
            <header>
                <Navbar/>
            </header>
            <main className="py-10 px-18 ">
                <section className="mb-6">
                    <h1 className={` font-[500]  text-4xl text-center mb-10 ${playfair.className} `}>Nos Realisations</h1>
                    <p className="text-center ">Découvrir les oeuvres de l'ABDC depuis sa création.</p>
                </section>

                {/* gallery */}
                <section className="bg-gray-200 p-5">
                    <div className="flex mb-4 bg-green-900">
                        <div className="relative h-70 w-100 max-2xl:hidden ">
                            <Image className="w-full h-full object-cover" fill src="/images/pexels-catscoming-674570.jpg" alt=""/>
                        </div>
                        <div></div>
                    </div>
                    <div className="flex justify-between">
                        <div></div>
                        <div className="relative h-70 w-100 max-2xl:hidden ">
                            <Image className="w-full h-full object-cover" fill src="/images/pexels-catscoming-674570.jpg" alt=""/>
                        </div>
                        
                    </div>
                </section>

            </main>
            <footer>
                <Footer/>
                
            </footer>



        </>
    )
}