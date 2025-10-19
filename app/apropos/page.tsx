import Navbar from "../composant/Navbar"
import {Playfair_Display} from "next/font/google"
import Footer from "../composant/Footer"
const playfair = Playfair_Display({
    subsets:["latin"],
    weight: ['400',"700"]
})
export default function Apropos(){

    return(
        <>
        <header>
            <Navbar/>
        </header>
        <main className="py-10 px-18 ">
            <section className="mb-6">
            
                <h1 className={` font-[500]  text-4xl text-center mb-10 ${playfair.className} `}>Qui Sommes Nous ?</h1>

                <p className="text-justify ">
                    L&apos;Association Béninoise de Droit Constitutionnel(ABDC) est un Think- Tank ind&apos;épendant, libre et résolument engagé au service de la démocratie au Bénin. 
                    Elle s&apos;établie en tant que société scientifique. Elle se positionne comme fervent défenseur de la démocratie et de la bonne gouvernance. 
                    Nous travaillons à la promotion du droit constitutionnel au Bénin et à l&apos;émergence d&apos;une nouvelle gouvernance constitutionnelle et politique en Afrique. 
                    Fondée par un groupe passionné de professionnels du droit, l&apos;ABDC s&apos;engage résolument à jouer un rôle significatif dans l&apos;évolution du paysage constitutionnel et politique au Bénin et en Afrique. 
                    Notre vision ambitieuse tourne autour de la promotion du développement des études, de la recherche et de l&apos;enseignement en droit constitutionnel et en science politique au sein des universités béninoises et des établissements d&apos;enseignement supérieur.
                    Nous sommes une organisation qui encourage les échanges d&apos;expériences entre les experts du droit constitutionnel. Notre engagement se manifeste à travers l&apos;organisation de divers événements, notamment des conférences, webinaire, entretien d&apos;actualité et colloques.
                    En favorisant le dialogue sur la démocratie, l&apos;Etat de droit et la bonne gouvernance, nous nous efforçons de créer un espace de débats contribuant à la gestion efficace des affaires publiques.
                </p>
            </section>
            <section className="mb-6">
               <h2 className={` font-[500]  text-2xl text-center mb-5 ${playfair.className} `}>Notre Mission</h2>
               <p>
                Notre mission est d&apos;inspirer un engagement civique fort et informé pour contribuer à l&apos;épanouissement démocratique en promouvant activement 
                les valeurs démocratiques et la bonne gouvernance, en suscitant une citoyenneté active et en encourageant la participation
                citoyenne éclairée dans les processus décisionnels.
               </p>
            </section>

            <section>
                <h2 className={` font-[500]  text-2xl text-center mb-5 ${playfair.className} `}>Nos Valeurs</h2>
                <p>Les valeurs qui sous-tendent les activités de l&apos;ABDC contribuent à l&apos;accomplissement de notre mission. Ces valeurs sont les suivantes:</p> <br />

                <ul className="flex flex-col gap-3">
                    <li><b>Engagement Civique:</b> Nous croyons en l&apos;importance d&apos;un engagement civique fort et informé, encourageant les citoyens à participer activement aux processus démocratiques et à la vie publique.</li>
                    <li><b>Promotion de la Démocratie:</b> Nous sommes engagés à promouvoir activement les valeurs démocratiques, en œuvrant pour le renforcement des institutions démocratiques et la protection des droits fondamentaux.</li>
                    <li><b>Bonne Gouvernance:</b> Nous défendons les principes de bonne gouvernance, soutenant des initiatives visant à assurer une gestion transparente, responsable et éthique des affaires publiques.</li>
                    <li><b>Innovation et Dialogue:</b> Nous encourageons l&apos;innovation dans la pensée juridique et favorisons le dialogue dynamique entre les experts du droit constitutionnel pour stimuler de nouvelles idées et approches.</li>
                    <li><b>Responsabilité Sociale:</b> Nous assumons une responsabilité sociale en contribuant de manière positive au développement de la société, en encourageant la justice sociale et l&apos;égalité des chances.</li>
                    <li><b>Transparence:</b> Nous promouvons la transparence dans toutes nos actions et processus, assurant une communication ouverte et honnête avec nos membres et la société en général.</li>
                    <li><b>Respect de la Diversité:</b> Nous respectons la diversité des opinions, des perspectives et des expériences, encourageant un environnement inclusif où chaque voix est entendue.</li>
                    <li><b>Intégrité:</b> Nous accordons une grande importance à l&apos;intégrité dans toutes nos activités, en maintenant des normes éthiques élevées et en agissant de manière conforme à nos principes fondateurs.</li>
                </ul>
            </section>

        </main>
        <footer>
            <Footer/>
            
        </footer>



        </>
    )
}