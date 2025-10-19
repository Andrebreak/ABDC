import Navbar from "../composant/Navbar"
import {Playfair_Display} from "next/font/google"
import Footer from "../composant/Footer"
const playfair = Playfair_Display({
    subsets:["latin"],
    weight: ['400',"700"]
})
export default function membres(){

    return(
        <>
        <header>
            <Navbar/>
        </header>
        <main className="py-10 px-18 ">
            <section className="mb-6">
                
                <h1 className={` font-[500]  text-4xl text-center mb-10 ${playfair.className} `}>Les membres</h1>          
            </section>

            <section>
               <h2 className={` font-[500]  text-2xl text-center mb-10 ${playfair.className} `}>L&apos;ABDC</h2>
               <ul className="flex flex-col gap-3">
                <li><b>L&apos;Equipe Dirigeante:</b></li>
                <li><b>Les Membres d&apos;Honneur</b></li>
                <li>Professeur Joèl AIVO</li>
                <li>Professeur Maurice AHANHANZO GLELE</li>
                <li>Maitre Robert DOSSOU</li>
                <li>Professeur Théodore HOLO</li>
                <li>Maitre Abraham ZINZINDOHOUE</li>


                </ul>
            </section>


            <section>
                <h2 className={` font-[500]  text-2xl text-center mb-6 ${playfair.className} `}>II-Influence Politique et Plaidoyer</h2>
                 <p>L&apos;ABDC se positionne comme un acteur influent dans l&apos;élaboration des politiques publiques, en favorisant la démocratie, la bonne gouvernance, et en plaidant en faveur de réformes constitutionnelles et du renforcement des institutions démocratiques.</p> <br />
                <ul className="flex flex-col gap-3">
                    <li><b>Analyse et Recherche Politique :</b>L&apos;ABDC mène des initiatives visant à influencer les politiques publiques en faveur de la démocratie, de la bonne gouvernance et du droit constitutionnel.</li>
                    <li><b>Campagnes de plaidoyer :</b>Concevoir et mettre en œuvre des campagnes de plaidoyer ciblées sur des questions de démocratie participative et représentative.</li>
                    <li><b>Participation aux discussions politiques :</b> Participer activement aux discussions politiques nationales et internationales pour faire avancer les idéaux constitutionnels et booster les réforme constitutionnelles et le renforcement des institutions démocratiques.</li>
                </ul>
            </section>

            <section>
               
            </section>

        </main>
        <footer>
            <Footer/>
            
        </footer>



        </>
    )
}