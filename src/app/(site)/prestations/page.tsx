import HeroSub from '@/components/shared/HeroSub'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prestations - EnergiNova Solutions',
  description: 'Découvrez nos services en énergies renouvelables, BIM Management et diagnostics de performance énergétique.',
}

export default function Prestations() {
  return (
    <main>
      <HeroSub 
        title="Nos Prestations"
        badge="Solutions complètes pour la transition énergétique"
        description="EnergiNova Solutions vous accompagne dans tous vos projets d'énergies renouvelables, de traitement des eaux et de BIM Management avec expertise et innovation."
      />
      
      {/* Bureau d'études – Énergie & Eau */}
      <section id="energies-renouvelables" className="py-20 bg-white dark:bg-dark">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 col-span-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-dark dark:text-white mb-6">
                Bureau d'études – Énergie & Eau
              </h2>
              <p className="text-lg text-dark/70 dark:text-white/70 mb-8 leading-relaxed">
                Notre expertise en ingénierie vous accompagne dans la conception et la réalisation de projets d'énergies renouvelables et de traitement des eaux.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Études techniques pour projets d'énergies renouvelables
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Solaire photovoltaïque, éolien, hydraulique - nous concevons des solutions adaptées à vos besoins énergétiques.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Ingénierie et conception pour stations de traitement
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Stations de traitement d'eau potable et eaux usées avec technologies innovantes et respect de l'environnement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Optimisation énergétique des infrastructures
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Amélioration de l'efficacité énergétique de vos installations existantes et nouvelles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 col-span-12">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-full">
                <div className="space-y-6">
                  <div className="bg-white dark:bg-dark/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-dark dark:text-white mb-3">Technologies maîtrisées</h4>
                    <ul className="space-y-2 text-dark/70 dark:text-white/70">
                      <li>• Panneaux photovoltaïques</li>
                      <li>• Éoliennes terrestres et offshore</li>
                      <li>• Micro-hydraulique</li>
                      <li>• Pompes à chaleur</li>
                      <li>• Traitement membranaire</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-dark/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-dark dark:text-white mb-3">Livrables</h4>
                    <ul className="space-y-2 text-dark/70 dark:text-white/70">
                      <li>• Études de faisabilité</li>
                      <li>• Plans d'exécution</li>
                      <li>• Cahiers des charges</li>
                      <li>• Suivi de chantier</li>
                      <li>• Mise en service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIM Management & Modélisation */}
      <section id="bim-management" className="py-20 bg-gray-50 dark:bg-dark/50">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 col-span-12 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-full">
                <div className="space-y-6">
                  <div className="bg-white dark:bg-dark/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-dark dark:text-white mb-3">Logiciels BIM</h4>
                    <ul className="space-y-2 text-dark/70 dark:text-white/70">
                      <li>• Autodesk Revit</li>
                      <li>• ArchiCAD</li>
                      <li>• Tekla Structures</li>
                      <li>• Navisworks</li>
                      <li>• BIM 360</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-dark/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-dark dark:text-white mb-3">Services BIM</h4>
                    <ul className="space-y-2 text-dark/70 dark:text-white/70">
                      <li>• Modélisation 3D</li>
                      <li>• Coordination multi-disciplines</li>
                      <li>• Clash detection</li>
                      <li>• Quantification automatique</li>
                      <li>• Planning 4D</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 col-span-12 order-1 lg:order-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-dark dark:text-white mb-6">
                BIM Management & Modélisation
              </h2>
              <p className="text-lg text-dark/70 dark:text-white/70 mb-8 leading-relaxed">
                Coordination BIM complète pour vos projets de construction et d'infrastructure avec modélisation numérique et gestion de données techniques.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Coordination BIM pour projets de construction
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Gestion et coordination des modèles BIM multi-disciplines pour optimiser la collaboration entre les équipes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Création de maquettes numériques
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Modélisation 3D détaillée en Revit, IFC et autres formats standards pour vos projets architecturaux et techniques.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Gestion de données techniques et DOE numérique
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Organisation et structuration des données techniques pour faciliter la maintenance et l'exploitation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Intégration dans la GMAO
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Connexion des modèles BIM avec les plateformes de gestion de maintenance assistée par ordinateur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostics & Performance énergétique */}
      <section id="diagnostics" className="py-20 bg-white dark:bg-dark">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 col-span-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-dark dark:text-white mb-6">
                Diagnostics & Performance énergétique
              </h2>
              <p className="text-lg text-dark/70 dark:text-white/70 mb-8 leading-relaxed">
                Analyse complète de la performance énergétique de vos bâtiments avec diagnostics, audits et préconisations d'amélioration.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Diagnostic bâtiment : analyse de l'existant
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Évaluation complète de l'état énergétique de votre bâtiment avec identification des points d'amélioration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      DPE (Diagnostic de Performance Énergétique)
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Étiquettes énergétiques conformes à la réglementation avec préconisations personnalisées d'amélioration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Audit énergétique : solutions de rénovation
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Solutions de rénovation énergétique avec gains chiffrés et plan de financement adapté à votre projet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 col-span-12">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-full">
                <div className="space-y-6">
                  <div className="bg-white dark:bg-dark/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-dark dark:text-white mb-3">Types de diagnostics</h4>
                    <ul className="space-y-2 text-dark/70 dark:text-white/70">
                      <li>• DPE (obligatoire)</li>
                      <li>• Audit énergétique</li>
                      <li>• Diagnostic technique</li>
                      <li>• Thermographie infrarouge</li>
                      <li>• Test d'étanchéité</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-dark/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-dark dark:text-white mb-3">Bénéfices</h4>
                    <ul className="space-y-2 text-dark/70 dark:text-white/70">
                      <li>• Réduction des coûts énergétiques</li>
                      <li>• Amélioration du confort</li>
                      <li>• Valorisation du patrimoine</li>
                      <li>• Conformité réglementaire</li>
                      <li>• Accès aux aides financières</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour un audit ou un devis gratuit. Notre équipe d'experts vous accompagne dans la réalisation de vos projets énergétiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contactez-nous
            </a>
            <a 
              href="tel:+33123456789" 
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
            >
              +33 1 23 45 67 89
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
