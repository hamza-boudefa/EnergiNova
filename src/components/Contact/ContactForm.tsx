// 'use client'

// import { useState } from 'react'

// interface FormData {
//   nom: string
//   prenom: string
//   email: string
//   telephone: string
//   entreprise: string
//   service: string
//   message: string
//   consentement: boolean
// }

// export default function ContactForm() {
//   const [formData, setFormData] = useState<FormData>({
//     nom: '',
//     prenom: '',
//     email: '',
//     telephone: '',
//     entreprise: '',
//     service: '',
//     message: '',
//     consentement: false
//   })
  
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
//     }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setSubmitStatus({ type: null, message: '' })

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })

//       const result = await response.json()

//       if (response.ok) {
//         setSubmitStatus({ type: 'success', message: 'Message envoyé avec succès ! Nous vous recontacterons bientôt.' })
//         setFormData({
//           nom: '',
//           prenom: '',
//           email: '',
//           telephone: '',
//           entreprise: '',
//           service: '',
//           message: '',
//           consentement: false
//         })
//       } else {
//         setSubmitStatus({ type: 'error', message: result.error || 'Une erreur est survenue lors de l&apos;envoi du message.' })
//       }
//     } catch (error) {
//       setSubmitStatus({ type: 'error', message: 'Une erreur est survenue lors de l&apos;envoi du message.' })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="bg-gray-50 dark:bg-dark/50 rounded-2xl p-8">
//       <h2 className="text-3xl font-semibold text-dark dark:text-white mb-6">
//         Envoyez-nous un message
//       </h2>
      
//       {submitStatus.type && (
//         <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
//           {submitStatus.message}
//         </div>
//       )}
      
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label htmlFor="nom" className="block text-sm font-medium text-dark dark:text-white mb-2">
//               Nom *
//             </label>
//             <input
//               type="text"
//               id="nom"
//               name="nom"
//               value={formData.nom}
//               onChange={handleInputChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
//               placeholder="Votre nom"
//             />
//           </div>
//           <div>
//             <label htmlFor="prenom" className="block text-sm font-medium text-dark dark:text-white mb-2">
//               Prénom *
//             </label>
//             <input
//               type="text"
//               id="prenom"
//               name="prenom"
//               value={formData.prenom}
//               onChange={handleInputChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
//               placeholder="Votre prénom"
//             />
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-dark dark:text-white mb-2">
//               Email *
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
//               placeholder="votre@email.com"
//             />
//           </div>
//           <div>
//             <label htmlFor="telephone" className="block text-sm font-medium text-dark dark:text-white mb-2">
//               Téléphone *
//             </label>
//             <input
//               type="tel"
//               id="telephone"
//               name="telephone"
//               value={formData.telephone}
//               onChange={handleInputChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
//               placeholder="+33 1 23 45 67 89"
//             />
//           </div>
//         </div>
        
//         <div>
//           <label htmlFor="entreprise" className="block text-sm font-medium text-dark dark:text-white mb-2">
//             Entreprise / Organisation
//           </label>
//           <input
//             type="text"
//             id="entreprise"
//             name="entreprise"
//             value={formData.entreprise}
//             onChange={handleInputChange}
//             className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
//             placeholder="Nom de votre entreprise"
//           />
//         </div>
        
//         <div>
//           <label htmlFor="service" className="block text-sm font-medium text-dark dark:text-white mb-2">
//             Service d&apos;intérêt *
//           </label>
//           <select
//             id="service"
//             name="service"
//             value={formData.service}
//             onChange={handleInputChange}
//             required
//             className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
//           >
//             <option value="">Sélectionnez un service</option>
//             <option value="energies-renouvelables">Énergies Renouvelables</option>
//             <option value="bim-management">BIM Management & Modélisation</option>
//             <option value="diagnostics">Diagnostics & Performance énergétique</option>
//             <option value="traitement-eaux">Traitement des Eaux</option>
//             <option value="autre">Autre</option>
//           </select>
//         </div>
        
//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-dark dark:text-white mb-2">
//             Message *
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//             rows={6}
//             required
//             className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
//             placeholder="Décrivez votre projet ou vos besoins..."
//           ></textarea>
//         </div>
        
//         <div className="flex items-start gap-3">
//           <input
//             type="checkbox"
//             id="consentement"
//             name="consentement"
//             checked={formData.consentement}
//             onChange={handleInputChange}
//             required
//             className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
//           />
//           <label htmlFor="consentement" className="text-sm text-dark/70 dark:text-white/70">
//             J&apos;accepte que mes données personnelles soient utilisées pour traiter ma demande et me recontacter. *
//           </label>
//         </div>
        
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
//         </button>
//       </form>
//     </div>
//   )
// }
