import Hero from '@/components/Home/Hero'
import Services from '@/components/Home/Services'
import GetInTouch from '@/components/Home/GetInTouch'
import FAQ from '@/components/Home/FAQs'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <GetInTouch />
      <FAQ />
    </main>
  )
}

// Why Choose Us Section
function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-dark">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark dark:text-white mb-4 md:mb-6">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-base sm:text-lg text-dark/70 dark:text-white/70 max-w-3xl mx-auto px-4">
            EnergiNova Solutions se distingue par son expertise technique, son approche innovante et son accompagnement personnalisé pour chaque projet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <div className="text-center px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-dark dark:text-white mb-3 sm:mb-4">Expertise reconnue</h3>
            <p className="text-sm sm:text-base text-dark/70 dark:text-white/70 leading-relaxed">
              Notre équipe d'ingénieurs certifiés possède une expertise approfondie dans les domaines des énergies renouvelables, du BIM et des diagnostics énergétiques.
            </p>
          </div>
          
          <div className="text-center px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-dark dark:text-white mb-3 sm:mb-4">Innovation constante</h3>
            <p className="text-sm sm:text-base text-dark/70 dark:text-white/70 leading-relaxed">
              Nous intégrons les dernières technologies et méthodes pour proposer des solutions innovantes et performantes adaptées aux enjeux de la transition énergétique.
            </p>
          </div>
          
          <div className="text-center px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-dark dark:text-white mb-3 sm:mb-4">Accompagnement personnalisé</h3>
            <p className="text-sm sm:text-base text-dark/70 dark:text-white/70 leading-relaxed">
              Chaque projet est unique. Nous adaptons nos solutions aux besoins spécifiques de nos clients et les accompagnons tout au long de la réalisation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
