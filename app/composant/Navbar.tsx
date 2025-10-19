"use client";
import Link from "next/link"
import { Menu, X } from "lucide-react";
import { useState,useEffect } from "react";


export default function Navbar(){
    // shadow scroll
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    // menu responsive
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className={` bg-white transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
            {/* Menu desktop */}
            <section className={` bg-white flex flex-col`}>
                <div className=" md:px-15 min-lg:px-20 flex p-3 justify-between font-semibold bg-gray-100 ">
                    {/* <p className={`cursor-pointer ${playfair.className} font-[400]`}> <span className="text-5xl">AD</span> <br /> <span className="text-xl">avocats</span></p> */}
                    <Link href="/" className="flex cursor-pointer font-[400] text-gray-800 uppercase">
                        {/* <p className={` ${playfair.className} `}> <span  className="text-5xl tracking-[-10px]">AD</span></p>
                        <p className="text-xl ">avocats</p> */}
                        <p>Association Béninoise de <br /> droit constitutionel</p>
                    </Link>

                    {/*Bouton mobile*/}
                    <button className="hidden max-lg:block" onClick={() => setIsOpen(!isOpen)}>
                        <Menu size={35} className="text-gray-800"/>
                    </button>
                </div>

                

                <ul className={`flex gap-8 py-4 md:px-15 min-lg:px-20 justify-center  text-gray-800 max-lg:hidden font-semibold uppercase text-[14px]`}>
                    <li>
                        <Link  className=" hover:text-gray-500 hover:underline underline-offset-8" href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link  className=" hover:text-gray-500 hover:underline  underline-offset-8"href="/apropos">À  propos</Link>
                    </li>
                    <li>
                        <Link  className=" hover:text-gray-500 hover:underline  underline-offset-8"href="/nosrealisations">Nos realisations</Link>
                    </li>
                    <li>
                        <Link  className=" hover:text-gray-500 hover:underline  underline-offset-8"href="/activites">Activités</Link>
                    </li>
                    <li>
                        <Link  className=" hover:text-gray-500 hover:underline  underline-offset-8"href="/membres">Membres</Link>
                    </li>
                    <li>
                        <Link  className=" hover:text-gray-500 hover:underline  underline-offset-8"href="/contact">Contact</Link> 
                    </li>
                </ul>
            </section>
           

            {/* Menu responsive*/}
            <section className={` fixed h-full w-full top-0 z-50 min-lg:hidden bg-gray-500 transform transition-transform duration-300  ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

                <div className="flex justify-between mb-15 border-b-1 border-gray-300 px-15 py-5">
                    <div className="text-md font-semibold uppercase">
                        <Link href="/" className="flex cursor-pointer text-gray-800 items-baseline gap-3 font-[400]">
                            {/* <p className={` ${playfair.className} `}> <span  className="text-5xl tracking-[-10px]">AD</span></p>
                            <p className="text-xl ">avocats</p> */}
                            <p>Association Béninoise de <br /> droit constitutionel</p>
                        </Link>
                    </div>

                    <button className="hidden max-lg:block  border-gray-800" onClick={() => setIsOpen(!isOpen)}>
                        <X size={35} className=" text-gray-800"/>
                    </button>
                </div>

                <ul className=" flex flex-col text-md gap-3 text-center text-gray-800 px-15">
                    <li>
                        <Link onClick={()=>{setIsOpen(false)}} className="" href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{setIsOpen(false)}} className=""href="/apropos">À propos</Link>
                    </li>
                    <li>
                        <Link  className=" hover:text-gray-500 hover:underline  underline-offset-8"href="/nosrealisations">Nos realisations</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{setIsOpen(false)}} className=""href="/activites">Activités</Link> 
                    </li>
                    <li>
                        <Link onClick={()=>{setIsOpen(false)}} className=""href="/membres">Membres</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{setIsOpen(false)}} className=""href="/contact">Contact</Link> 
                    </li>  
                </ul>
            </section>
        </nav>
    )
}