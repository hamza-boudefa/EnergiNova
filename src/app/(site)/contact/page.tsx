'use client'
import HeroSub from '@/components/shared/HeroSub'
import { Metadata } from 'next'
import { useState } from 'react'

interface FormData {
  nom: string
  prenom: string
  email: string
  telephone: string
  entreprise: string
  service: string
  message: string
  consentement: boolean
}


export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    service: '',
    message: '',
    consentement: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message envoyé avec succès ! Nous vous recontacterons bientôt.' })
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          entreprise: '',
          service: '',
          message: '',
          consentement: false
        })
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Une erreur est survenue lors de l\'envoi du message.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Une erreur est survenue lors de l\'envoi du message.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <HeroSub 
        title="Contactez-nous"
        badge=""
        description="Notre équipe d'experts est à votre disposition pour vous accompagner dans vos projets d'énergies renouvelables, de traitement des eaux et de BIM Management."
      />
      
      {/* Contact Form & Info */} 
      <section className="py-20 bg-white dark:bg-dark">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="grid grid-cols-12 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-8 col-span-12">
              <div className="bg-gray-50 dark:bg-dark/50 rounded-2xl p-8">
                <h2 className="text-3xl font-semibold text-dark dark:text-white mb-6">
                  Envoyez-nous un message
                </h2>
                <div className="bg-gray-50 dark:bg-dark/50 rounded-2xl p-8">
       <h2 className="text-3xl font-semibold text-dark dark:text-white mb-6">
         Envoyez-nous un message
      </h2>
      
      {submitStatus.type && (
        <div className={`mb-6 p-4 rounded-lg ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800' 
            : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-dark dark:text-white mb-2">
              Nom *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-dark dark:text-white mb-2">
              Prénom *
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
              placeholder="Votre prénom"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark dark:text-white mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-dark dark:text-white mb-2">
              Téléphone *
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
              placeholder="+33 1 23 45 67 89"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="entreprise" className="block text-sm font-medium text-dark dark:text-white mb-2">
            Entreprise / Organisation
          </label>
          <input
            type="text"
            id="entreprise"
            name="entreprise"
            value={formData.entreprise}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
            placeholder="Nom de votre entreprise"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-dark dark:text-white mb-2">
            Service d'intérêt *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
          >
            <option value="">Sélectionnez un service</option>
            <option value="energies-renouvelables">Énergies Renouvelables</option>
            <option value="bim-management">BIM Management & Modélisation</option>
            <option value="diagnostics">Diagnostics & Performance énergétique</option>
            <option value="traitement-eaux">Traitement des Eaux</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark dark:text-white mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-dark text-dark dark:text-white"
            placeholder="Décrivez votre projet ou vos besoins..."
          ></textarea>
        </div>
        
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consentement"
            name="consentement"
            checked={formData.consentement}
            onChange={handleInputChange}
            required
            className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label htmlFor="consentement" className="text-sm text-dark/70 dark:text-white/70">
            J'accepte que mes données personnelles soient utilisées pour traiter ma demande et me recontacter. *
          </label>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </form>
    </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-4 col-span-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-dark dark:text-white mb-6">
                    Nos coordonnées
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark dark:text-white mb-1">Adresse</h4>
                        <p className="text-dark/70 dark:text-white/70">
                          123 Avenue de l'Innovation<br />
                          75001 Paris, France
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark dark:text-white mb-1">Téléphone</h4>
                        <p className="text-dark/70 dark:text-white/70">
                          <a href="tel:+33123456789" className="hover:text-primary transition-colors">
                            +33 1 23 45 67 89
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark dark:text-white mb-1">Email</h4>
                        <p className="text-dark/70 dark:text-white/70">
                          <a href="mailto:contact@energinova-solutions.com" className="hover:text-primary transition-colors">
                            contact@energinova-solutions.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark dark:text-white mb-1">Horaires</h4>
                        <p className="text-dark/70 dark:text-white/70">
                          Lun - Ven: 9h00 - 18h00<br />
                          Sam: 9h00 - 12h00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Contact */}
                <div className="bg-primary/5 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-dark dark:text-white mb-4">
                    Besoin d'une réponse rapide ?
                  </h4>
                  <p className="text-dark/70 dark:text-white/70 mb-4">
                    Appelez-nous directement pour discuter de votre projet.
                  </p>
                  <a 
                    href="tel:+33123456789"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Appeler maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark/50">
  <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold text-dark dark:text-white mb-4">
        Notre localisation
      </h2>
      <p className="text-dark/70 dark:text-white/70">
        Situés au cœur de Paris, nous sommes facilement accessibles pour nos clients.
      </p>
    </div>

    <div className="bg-white dark:bg-dark rounded-2xl overflow-hidden shadow-lg">
      <div className="h-96">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps?q=123+Avenue+de+l'Innovation,+75001+Paris&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      {/* <section className="py-20 bg-white dark:bg-dark">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-dark dark:text-white mb-4">
              Questions fréquentes
            </h2>
            <p className="text-dark/70 dark:text-white/70">
              Retrouvez les réponses aux questions les plus courantes sur nos services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 dark:bg-dark/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-3">
                Combien de temps faut-il pour réaliser un audit énergétique ?
              </h3>
              <p className="text-dark/70 dark:text-white/70">
                Un audit énergétique complet prend généralement entre 2 à 4 semaines selon la taille et la complexité du bâtiment. Nous vous fournissons un planning détaillé lors de notre premier échange.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-dark/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-3">
                Proposez-vous des devis gratuits ?
              </h3>
              <p className="text-dark/70 dark:text-white/70">
                Oui, nous proposons des devis gratuits et sans engagement pour tous nos services. Contactez-nous pour discuter de votre projet et recevoir une estimation personnalisée.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-dark/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-3">
                Travaillez-vous avec des particuliers et des entreprises ?
              </h3>
              <p className="text-dark/70 dark:text-white/70">
                Absolument ! Nous accompagnons aussi bien les particuliers que les entreprises, collectivités et institutions dans leurs projets énergétiques et de traitement des eaux.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-dark/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-3">
                Quelles sont les aides financières disponibles ?
              </h3>
              <p className="text-dark/70 dark:text-white/70">
                Nous vous informons sur toutes les aides disponibles (MaPrimeRénov', CEE, subventions locales) et vous accompagnons dans vos démarches pour optimiser le financement de votre projet.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  )
}



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
//         setSubmitStatus({ type: 'error', message: result.error || 'Une erreur est survenue lors de l\'envoi du message.' })
//       }
//     } catch (error) {
//       setSubmitStatus({ type: 'error', message: 'Une erreur est survenue lors de l\'envoi du message.' })
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
//         <div className={`mb-6 p-4 rounded-lg ${
//           submitStatus.type === 'success' 
//             ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800' 
//             : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
//         }`}>
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
//             Service d'intérêt *
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
//             J'accepte que mes données personnelles soient utilisées pour traiter ma demande et me recontacter. *
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