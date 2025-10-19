import Navbar from "../composant/Navbar"
import {Playfair_Display} from "next/font/google"
import Footer from "../composant/Footer"
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
                    <h1 className={` font-[500]  text-4xl text-center mb-10 ${playfair.className} `}>Nos activités</h1>
                    <p className="text-center ">L&apos;ABDC depuis sa création s&apos;engage dans des activités variées pour atteindre ses objectifs , découvree des actions , projets et realisations de l'ABDC.</p>
                </section>

                <section>
                    <h2 className={` font-[500]  text-2xl text-center mb-10 ${playfair.className} `}>I-Développement des Capacités</h2>
                    <ul className="flex flex-col gap-3">
                        <li><b>Ambition stratégique :</b>L&apos;ABDC travaille pour être un leader incontesté dans la promotion du développement des compétences en droits humains, en démocratie et en gouvernance politique au Bénin en offrant des programmes éducatifs novateurs, pratiques et accessibles à un large public.</li>
                        <li><b>Ateliers de formation :</b> Renforcer les compétences des étudiants, des professionnels et des membres de la société civile en droit constitutionnel</li>
                        <li><b>Programmes de mentorat :</b> Soutenir le développement professionnel des jeunes juristes et chercheurs dans le domaine du droit constitutionnel, de la démocratie et de la bonne gouvernance</li>
                        <li><b>Cours en ligne et ressources éducatives :</b> Promouvoir l&apos;excellence académique dans le domaine du droit constitutionnel, de la démocratie et de la bonne gouvernance et rendre les ressources éducatives accessibles à un large public.</li>
                    </ul>
                </section>


                <section className="mb-15">
                    <h2 className={` font-[500]  text-2xl text-center mb-6 ${playfair.className} `}>II-Influence Politique et Plaidoyer</h2>
                    <p>L&apos;ABDC se positionne comme un acteur influent dans l&apos;élaboration des politiques publiques, en favorisant la démocratie, la bonne gouvernance, et en plaidant en faveur de réformes constitutionnelles et du renforcement des institutions démocratiques.</p> <br />
                    <ul className="flex flex-col gap-3">
                        <li><b>Analyse et Recherche Politique :</b>L&apos;ABDC mène des initiatives visant à influencer les politiques publiques en faveur de la démocratie, de la bonne gouvernance et du droit constitutionnel.</li>
                        <li><b>Campagnes de plaidoyer :</b>Concevoir et mettre en œuvre des campagnes de plaidoyer ciblées sur des questions de démocratie participative et représentative.</li>
                        <li><b>Participation aux discussions politiques :</b> Participer activement aux discussions politiques nationales et internationales pour faire avancer les idéaux constitutionnels et booster les réforme constitutionnelles et le renforcement des institutions démocratiques.</li>
                    </ul>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>



        </>
    )
}