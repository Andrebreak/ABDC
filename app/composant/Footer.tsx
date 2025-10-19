'use client';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from "next/link"
import { Facebook, Linkedin,Mail,Phone,MapPin} from 'lucide-react';

export default function Footer(){
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
        setVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    return(
        <footer data-aos='fade' className="">
            <section  className=" py-10 min-sm:py-30 text-black  grid-cols-[70%] justify-center  space-y-10 md:grid-cols-[35%_35%] md:space-y-20 grid min-lg:grid-cols-[20%_20%_20%_10%] space-x-15 min-md:items-baseline min-md:justify-items-center min-md:justify-center ">
               <div data-aos='fade-left' className="flex font-light flex-col space-y-6">
                    <div className="flex cursor-pointer items-baseline gap-3 font-[400]">
                        <p>Association Béninoise de <br /> droit constitutionel</p>
                    </div>
                    <p className="">Fonder l&apos;avenir du Benin sur le droit constitutionnel.</p>
                    {/* &apos; */}


                    <div className='flex space-x-2'>
                        <MapPin size={50}/>
                        <p className='text-sm font-extralight'> Nous sommes situez à Fidjrossè ,dans la ruelle de Assemblée de Dieu Temple Morija</p>
                    </div>
                   
                   <div className='flex space-x-2 '>
                        <Phone size={20}/>
                        <p className='text-sm font-extralight'>+229 01 41 41 41</p>
                   </div>
                    
                    <Link href="/contact" className=" btn btn-md flex gap-3 items-center uppercase ">
                       <Mail size={18}/>
                       <p className='hover:text-black hover:underline underline-offset-6 decoration-1'> Contacter nous ici </p>
                    </Link>
                </div>

                <div data-aos='fade-left' className=" font-light flex flex-col space-y-4">
                    <header>
                        <h2 className="font-semibold"> Horaires </h2>
                    </header>
                    <p className="">Lundi - Vendredi : 8h - 18h</p>
                    <p className="">Samedi : Fermé</p>
                    <p className="">Dimanche : Fermé</p>
                </div>
               
                <div data-aos='fade-left' className="flex space-x-4">
                    <Link href="https://facebook.com">
                        <Facebook size={20}/>
                    </Link>
                    <Link href="https://linkedin.com">
                        <Linkedin size={20} />
                    </Link>
                </div>
            </section>
        
            

            <section className="bg-white text-center text-black py-5">
                <p>2024 ABDC Tous droits réservés</p>
            </section>

            {visible && (
            <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-gray-800 cursor-pointer text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition" aria-label="Remonter en haut">
            <ArrowUp size={20} />
            </button>
            )}
            
        </footer>
    )
}