// import { useState } from "react";

// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(null); // 'success' | 'error'

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);
//     setStatus(null);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, subject, message }),
//       });

//       if (res.ok) {
//         setStatus("success");
//         setName("");
//         setEmail("");
//         setSubject("");
//         setMessage("");
//       } else {
//         setStatus("error");
//       }
//     } catch (err) {
//       setStatus("error");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//         <p>coming soon...</p>
//       <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border border-gray-100">
//         <div className="md:flex">
//           <div className="md:w-1/3 p-6 flex items-center justify-center bg-gray-50">
//             <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M22 12v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6" />
//               </svg>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="md:w-2/3 p-6">
//             <h2 className="text-xl font-semibold mb-1">Contactez-nous</h2>
//             <p className="text-sm text-gray-500 mb-4">Nous répondrons dans les plus brefs délais.</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               <label className="flex flex-col">
//                 <span className="text-xs text-gray-600 mb-1">Nom</span>
//                 <input
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
//                   placeholder="Votre nom"
//                   aria-label="Nom"
//                 />
//               </label>

//               <label className="flex flex-col">
//                 <span className="text-xs text-gray-600 mb-1">Email</span>
//                 <input
//                   required
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
//                   placeholder="you@exemple.com"
//                   aria-label="Email"
//                 />
//               </label>

//               <label className="md:col-span-2 flex flex-col">
//                 <span className="text-xs text-gray-600 mb-1">Sujet</span>
//                 <input
//                   value={subject}
//                   onChange={(e) => setSubject(e.target.value)}
//                   className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
//                   placeholder="Ex: Demande de partenariat"
//                   aria-label="Sujet"
//                 />
//               </label>

//               <label className="md:col-span-2 flex flex-col">
//                 <span className="text-xs text-gray-600 mb-1">Message</span>
//                 <textarea
//                   required
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   rows={5}
//                   className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 resize-none"
//                   placeholder="Écrivez votre message ici..."
//                   aria-label="Message"
//                 />
//               </label>
//             </div>

//             <div className="mt-4 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm font-medium shadow-sm hover:brightness-95 disabled:opacity-60"
//                 >
//                   {loading ? "Envoi..." : "Envoyer"}
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => { setName(""); setEmail(""); setSubject(""); setMessage(""); setStatus(null); }}
//                   className="text-sm px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
//                 >
//                   Réinitialiser
//                 </button>
//               </div>

//               <div>
//                 {status === "success" && <span className="text-sm text-green-600">Message envoyé — merci !</span>}
//                 {status === "error" && <span className="text-sm text-red-600">Impossible d'envoyer. Réessayez plus tard.</span>}
//               </div>
//             </div>

//             <p className="text-xs text-gray-400 mt-4">En envoyant ce message, vous acceptez que nous utilisions ces informations pour vous répondre.</p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Conctact(){
    return(
        <>
            <p>comming soon</p>
        </>
    )
}