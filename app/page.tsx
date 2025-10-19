import Navbar from "./composant/Navbar";
import Footer from "./composant/Footer";
import {Playfair_Display} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Home() {

  return (
    <>

      {/* header */}
      <header className="sticky top-0 z-50">
        <Navbar/>
      </header>
      {/* hero */}
      <section className="flex items-start h-160 flex-col gap-3 p-20  bg-gray-600 text-white justify-center bg-[linear-gradient(to_right,rgba(31,41,55,1),transparent),url(/images/caption.jpg)] bg-cover bg-top bg-no-repeat">
        <h1  className={` font-[500] text-7xl ${playfair.className} `}>Association Beninoise de <br />droit constitutionnel</h1>
        <p>Fonder l&apos;avenir du Benin sur le droit constitutionnel.</p>
        <button className="btn btn-md hover:text-white hover:bg-black shadow-none text-black uppercase">Voir nos actions</button>
      </section>

      {/*  */}
      <main className="p-10">
        <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 ">
          <article className="flex flex-col md:flex-row items-stretch w-full rounded-3xl overflow-hidden shadow-2xl bg-white/70 backdrop-blur-md border border-gray-100">
            <div className="w-full md:w-1/2 relative group overflow-hidden">
              <img
                src="/images/ceo.jpeg"
                alt="Photo du CEO"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-gray-800">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
                M Stanic ADJACOTAN 
              </h1>
              <p className="text-base md:text-lg text-gray-500 mb-6 border-l-4 border-gray-900 pl-3">
                Président de l&apos;Association Béninoise de Droit Constitutionnel
              </p>

              <div className="space-y-2 text-sm md:text-base text-justify text-gray-600 leading-relaxed">
                <p>
                  Le Bénin, comme beaucoup de nations africaines, se trouve à la croisée des chemins. Le présent nous interroge, 
                  il nous bouscule, et parfois, il nous inquiète. Mais il est aussi porteur de promesses, de potentialités, 
                  et de défis que nous devons relever avec lucidité et engagement. Nous vivons dans un temps où la gouvernance, 
                  la transparence, et la justice ne sont plus de simples concepts théoriques, mais des nécessités impérieuses pour 
                  assurer la paix, la stabilité, et le développement de nos sociétés. Le Bénin, notre cher pays, a été le théâtre de
                  transformations politiques et institutionnelles marquantes. Pourtant, ces avancées restent fragiles, souvent mises à
                  l&apos;épreuve par des crises électorales et des tensions politiques. C&apos;est dans ce contexte que l&apos;Association 
                  Béninoise de Droit Constitutionnel (ABDC) a vu le jour. Notre engagement est clair : promouvoir le droit constitutionnel,
                  renforcer les institutions démocratiques, et créer un espace de réflexion critique et constructive pour imaginer un avenir
                  plus juste et plus équitable. Nous croyons fermement que l&apos;avenir du Bénin, et plus largement celui de l&apos;Afrique, 
                  repose sur notre capacité à dépasser les maux qui minent nos sociétés : la corruption, les abus de pouvoir et toutes a
                  utres dérives susceptibles de compromettre les fondements d&apos;un Etat de droit en pleine construction. Face à ces défis, 
                  la résistance n&apos;est pas seulement une nécessité, elle est une responsabilité. Mais il ne s&apos;agit pas seulement de
                  résister. Il s&apos;agit aussi de proposer, d&apos;innover, et d&apos;agir. À l&apos;ABDC, nous nous engageons 
                  dans une résistance proactive, faite de propositions concrètes et de réflexions profondes, ancrées dans les réalités
                  de notre temps. Nous voulons être des acteurs du changement, des architectes d&apos;une gouvernance nouvelle, fondée 
                  sur les valeurs démocratiques et &apos;État de droit. Nous savons que le chemin est long et semé d&apos;embûches. Mais nous croyons en la force de &apos;engagement collectif, en la puissance des idées, et en la nécessité d’agir avec intégrité et détermination. Au sein de &apos;ABDC, nous nous efforçons de créer des ponts entre la théorie et la pratique, entre le droit et la société. Nous croyons que c’est par la réflexion intellectuelle rigoureuse, couplée à des actions citoyennes concrètes, que nous pourrons bâtir une société où règne la justice, la transparence, et la dignité humaine. Je vous invite à nous rejoindre dans cette démarche. Ensemble, nous pouvons et nous devons être les artisans d’un avenir meilleur pour le Bénin et pour &apos;Afrique.
                  Ensemble, marchons vers un futur où le droit constitutionnel est la pierre angulaire de notre développement collectif, 
                  et où chaque citoyen se sent pleinement acteur de la construction de notre démocratie.</p>
              </div>

            
            </div>
          </article>
        </section>

      </main>


      <footer>
        <Footer/>
      </footer>
      
    </>
    
  );
}
