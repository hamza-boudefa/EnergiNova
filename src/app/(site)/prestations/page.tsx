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
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
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
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Consulting en énergies renouvelables
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Conseil stratégique et accompagnement dans le choix et la mise en œuvre de solutions énergétiques durables.
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
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
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
                      <li>• Autodesk Docs</li>
                      <li>• Trimble Connect</li>
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
                      <li>• Développement plugins Revit</li>
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
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Développement plugins Revit
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Création d'outils personnalisés pour automatiser vos processus BIM et optimiser votre productivité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outils BIM Détaillés */}
      <section id="outils-bim" className="py-20 bg-white dark:bg-dark">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold text-dark dark:text-white mb-6">
              Outils BIM & Technologies
            </h2>
            <p className="text-lg text-dark/70 dark:text-white/70 max-w-3xl mx-auto">
              Notre expertise couvre l'ensemble de l'écosystème BIM avec les outils les plus avancés du marché.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Modélisation & Conception */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-semibold text-dark dark:text-white mb-6">Modélisation & Conception</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Autodesk Revit</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Modélisation architecturale, structure, MEP</p>
                </div>
              </div>
            </div>

            {/* Interopérabilité & Collaboration */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-semibold text-dark dark:text-white mb-6">Interopérabilité & Collaboration</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Navisworks Manage</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Détection de clashs, revue de maquette</p>
                </div>
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Solibri Office</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Vérification qualité BIM, contrôle IFC</p>
                </div>
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">BIMcollab / BCF Manager</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Gestion des problèmes (issues tracking)</p>
                </div>
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Trimble Connect</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Collaboration cloud multi-acteurs</p>
                </div>
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">BIM Track</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Communication et suivi des conflits</p>
                </div>
              </div>
            </div>

            {/* Coordination & Synthèse */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-semibold text-dark dark:text-white mb-6">Coordination & Synthèse</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Dalux</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Visualisation sur chantier, gestion DOE</p>
                </div>
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Revizto</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Coordination et communication immersive</p>
                </div>
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Synchro 4D (Bentley)</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Planification 4D et suivi chantier</p>
                </div>
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Navisworks Simulate</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Simulation planning et visualisation</p>
                </div>
              </div>
            </div>

            {/* Gestion des données & Exploitation */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-semibold text-dark dark:text-white mb-6">Gestion des données & Exploitation</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Autodesk Docs / Construction Cloud</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Plateforme cloud de gestion de projet</p>
                </div>
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Bentley AssetWise</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Gestion du cycle de vie des actifs</p>
                </div>
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">EcoDomus</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">BIM to FM (Facility Management)</p>
                </div>
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Archidata</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">DOE numérique, gestion patrimoniale</p>
                </div>
              </div>
            </div>

            {/* Analyse & Simulation */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-semibold text-dark dark:text-white mb-6">Analyse & Simulation</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Dynamo (Autodesk)</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Automatisation et scripts paramétriques</p>
                </div>
              </div>
            </div>

            {/* Visualisation & Réalité Immersive */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-semibold text-dark dark:text-white mb-6">Visualisation & Réalité Immersive</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Twinmotion (Epic Games)</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Rendu temps réel</p>
                </div>
                <div className="bg-white dark:bg-dark/50 rounded-xl p-4">
                  <h4 className="font-semibold text-dark dark:text-white mb-2">Enscape</h4>
                  <p className="text-sm text-dark/70 dark:text-white/70">Rendu immersif directement depuis Revit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOE & GMAO */}
      <section id="doe-gmao" className="py-20 bg-gray-50 dark:bg-dark/50">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-6 col-span-12 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-full">
                <div className="space-y-6">
                  <div className="bg-white dark:bg-dark/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-dark dark:text-white mb-3">DOE Numérique</h4>
                    <ul className="space-y-2 text-dark/70 dark:text-white/70">
                      <li>• Maquettes IFC/RVT conformes à la charte BIM</li>
                      <li>• Plans PDF</li>
                      <li>• Notices techniques</li>
                      <li>• Schémas et certificats</li>
                      <li>• Arborescence documentaire organisée</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-dark/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-dark dark:text-white mb-3">Fichiers GMAO</h4>
                    <ul className="space-y-2 text-dark/70 dark:text-white/70">
                      <li>• Base d'équipements complète (Excel)</li>
                      <li>• Codes, familles, libellés</li>
                      <li>• Localisation et références techniques</li>
                      <li>• Périodicité de maintenance</li>
                      <li>• Intégration facilitée (Carl Source, Maximo, Ultimo)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 col-span-12 order-1 lg:order-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-dark dark:text-white mb-6">
                DOE & GMAO
              </h2>
              <p className="text-lg text-dark/70 dark:text-white/70 mb-8 leading-relaxed">
                Nous accompagnons nos clients dans la structuration et la livraison des DOE numériques ainsi que dans la préparation des fichiers d'intégration GMAO.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      DOE Numérique complet
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Maquettes IFC/RVT conformes à la charte BIM, plans PDF, notices techniques, schémas, certificats et arborescence documentaire organisée.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Fichiers GMAO optimisés
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Base d'équipements complète (codes, familles, libellés, localisation, références techniques, périodicité de maintenance) facilitant l'intégration dans les logiciels de maintenance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Automatisation des exports
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Exports Revit → Excel optimisés (via Dynamo ou plugins) pour un gain de temps et une fiabilité accrue.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">
                      Traçabilité complète
                    </h3>
                    <p className="text-dark/70 dark:text-white/70">
                      Assurer une traçabilité complète des équipements et un passage fluide vers l'exploitation/maintenance.
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
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contactez-nous
            </a>
            <a 
              href="tel:0664456706" 
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
            >
              06 64 45 67 06
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
