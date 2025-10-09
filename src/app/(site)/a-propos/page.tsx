import HeroSub from '@/components/shared/HeroSub'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos - EnergiNova Solutions',
  description: 'Découvrez EnergiNova Solutions, bureau d\'études innovant spécialisé en énergies renouvelables, traitement des eaux et BIM Management.',
}

export default function APropos() {
  return (
    <main>
      <HeroSub 
        title="À propos d'EnergiNova Solutions"
        badge="Innovation, transition énergétique et accompagnement durable"
        description="EnergiNova Solutions est un bureau d'études innovant qui accompagne ses clients dans la transition énergétique avec expertise et engagement."
      />
      
      {/* Présentation de l'entreprise */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-dark">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark dark:text-white mb-4 md:mb-6">
                EnergiNova Solutions
              </h2>
              <p className="text-base sm:text-lg text-dark/70 dark:text-white/70 mb-4 md:mb-6 leading-relaxed">
                Fondé avec la vision d'accélérer la transition énergétique, EnergiNova Solutions est un bureau d'études spécialisé qui combine innovation technologique et expertise technique pour répondre aux défis énergétiques de demain.
              </p>
              <p className="text-base sm:text-lg text-dark/70 dark:text-white/70 mb-6 md:mb-8 leading-relaxed">
                Notre mission est d'accompagner les entreprises, collectivités et particuliers dans leurs projets d'énergies renouvelables, de traitement des eaux et de modélisation BIM, en proposant des solutions durables et performantes.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-dark/50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50+</div>
                  <div className="text-sm sm:text-base text-dark/70 dark:text-white/70">Projets réalisés</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-dark/50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">5+</div>
                  <div className="text-sm sm:text-base text-dark/70 dark:text-white/70">Années d'expérience</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-dark/50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">100%</div>
                  <div className="text-sm sm:text-base text-dark/70 dark:text-white/70">Satisfaction client</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-dark/50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
                  <div className="text-sm sm:text-base text-dark/70 dark:text-white/70">Support technique</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8 mt-8 lg:mt-0">
                <h3 className="text-xl sm:text-2xl font-semibold text-dark dark:text-white mb-4 sm:mb-6">Notre expertise</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-dark dark:text-white">Énergies Renouvelables</h4>
                      <p className="text-xs sm:text-sm text-dark/70 dark:text-white/70">Solaire, éolien, hydraulique</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-dark dark:text-white">BIM Management</h4>
                      <p className="text-xs sm:text-sm text-dark/70 dark:text-white/70">Modélisation et coordination</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-dark dark:text-white">Diagnostics Énergétiques</h4>
                      <p className="text-xs sm:text-sm text-dark/70 dark:text-white/70">Performance et optimisation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-dark dark:text-white">Traitement des Eaux</h4>
                      <p className="text-xs sm:text-sm text-dark/70 dark:text-white/70">Potable et eaux usées</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-dark/50">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark dark:text-white mb-4 md:mb-6">
              Nos Valeurs
            </h2>
            <p className="text-base sm:text-lg text-dark/70 dark:text-white/70 max-w-3xl mx-auto px-4">
              Les valeurs qui guident notre action et notre engagement envers nos clients et l'environnement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-dark dark:text-white mb-3 sm:mb-4">Innovation</h3>
              <p className="text-sm sm:text-base text-dark/70 dark:text-white/70 leading-relaxed">
                Nous intégrons les dernières technologies et méthodes pour proposer des solutions innovantes et performantes à nos clients.
              </p>
            </div>
            
            <div className="text-center px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-dark dark:text-white mb-3 sm:mb-4">Transition Énergétique</h3>
              <p className="text-sm sm:text-base text-dark/70 dark:text-white/70 leading-relaxed">
                Notre engagement pour un avenir durable nous pousse à développer des solutions respectueuses de l'environnement.
              </p>
            </div>
            
            <div className="text-center px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-dark dark:text-white mb-3 sm:mb-4">Accompagnement Personnalisé</h3>
              <p className="text-sm sm:text-base text-dark/70 dark:text-white/70 leading-relaxed">
                Chaque projet est unique. Nous adaptons nos solutions aux besoins spécifiques de nos clients pour garantir leur succès.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-dark">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark dark:text-white mb-4 md:mb-6">
              Notre Équipe
            </h2>
            <p className="text-base sm:text-lg text-dark/70 dark:text-white/70 max-w-3xl mx-auto px-4">
              Une équipe d'experts passionnés et qualifiés, dédiée à l'excellence technique et à l'innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center px-4">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-dark dark:text-white mb-2">Directeur Technique</h3>
              <p className="text-sm sm:text-base text-primary font-medium mb-2 sm:mb-3">Ingénieur Énergies Renouvelables</p>
              <p className="text-dark/70 dark:text-white/70 text-xs sm:text-sm">
                15 ans d'expérience dans le domaine des énergies renouvelables et de l'ingénierie énergétique.
              </p>
            </div>
            
            <div className="text-center px-4">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-dark dark:text-white mb-2">Responsable BIM</h3>
              <p className="text-sm sm:text-base text-primary font-medium mb-2 sm:mb-3">Expert BIM & Modélisation</p>
              <p className="text-dark/70 dark:text-white/70 text-xs sm:text-sm">
                Spécialiste en coordination BIM et modélisation 3D avec une expertise reconnue dans les projets d'infrastructure.
              </p>
            </div>
            
            <div className="text-center px-4">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-dark dark:text-white mb-2">Ingénieur Diagnostics</h3>
              <p className="text-sm sm:text-base text-primary font-medium mb-2 sm:mb-3">Expert Performance Énergétique</p>
              <p className="text-dark/70 dark:text-white/70 text-xs sm:text-sm">
                Certifié pour les diagnostics énergétiques et spécialisé dans l'optimisation de la performance des bâtiments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos partenaires */}
      {/* <section className="py-20 bg-gray-50 dark:bg-dark/50">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold text-dark dark:text-white mb-6">
              Nos Partenaires
            </h2>
            <p className="text-lg text-dark/70 dark:text-white/70 max-w-3xl mx-auto">
              Nous collaborons avec des institutions reconnues et des entreprises leaders pour garantir l'excellence de nos services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-white dark:bg-dark rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm">
                <span className="text-lg font-bold text-primary">ENSIATE</span>
              </div>
              <p className="text-sm text-dark/70 dark:text-white/70">École d'ingénieurs</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-white dark:bg-dark rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm">
                <span className="text-lg font-bold text-primary">STEREAU</span>
              </div>
              <p className="text-sm text-dark/70 dark:text-white/70">Traitement des eaux</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-white dark:bg-dark rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm">
                <span className="text-lg font-bold text-primary">ADEME</span>
              </div>
              <p className="text-sm text-dark/70 dark:text-white/70">Transition écologique</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-white dark:bg-dark rounded-lg mx-auto mb-4 flex items-center justify-center shadow-sm">
                <span className="text-lg font-bold text-primary">CSTB</span>
              </div>
              <p className="text-sm text-dark/70 dark:text-white/70">Bâtiment durable</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6">
            Discutons de votre projet
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Notre équipe d'experts est prête à vous accompagner dans la réalisation de vos projets énergétiques. Contactez-nous dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a 
              href="/contact" 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
            >
              Nous contacter
            </a>
            <a 
              href="/prestations" 
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-colors duration-300 text-sm sm:text-base"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
