import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='!py-0'>
      <div className='bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative'>
        <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68'>
          <div className='relative text-white dark:text-dark text-center md:text-start z-10'>
            <p className='text-inherit text-xm font-medium'>Solutions durables & innovantes</p>
            <h1 className='text-inherit text-6xl sm:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-6'>
              EnergiNova Solutions
            </h1>
            <p className='text-inherit text-xl font-medium mb-6 md:max-w-2xl'>
              Bureau d'études spécialisé en énergies renouvelables, traitement des eaux et BIM Management
            </p>
            <div className='flex flex-col xs:flex-row justify-center md:justify-start gap-4'>
              <Link href="/contact" className='px-8 py-4 border border-white dark:border-dark bg-white dark:bg-dark text-dark dark:text-white duration-300 dark:hover:text-dark hover:bg-transparent hover:text-white text-base font-semibold rounded-full hover:cursor-pointer'>
                Contactez-nous
              </Link>
              <Link href="/prestations" className='px-8 py-4 border border-white dark:border-dark bg-transparent text-white dark:text-dark hover:bg-white dark:hover:bg-dark dark:hover:text-white hover:text-dark duration-300 text-base font-semibold rounded-full hover:cursor-pointer'>
                Nos prestations
              </Link>
            </div>
          </div>
          <div className='hidden md:block absolute -top-2 -right-68'>
            <Image
              src={'/images/hero/building.png'}
              alt='heroImg'
              width={1082}
              height={1016}
              priority={false}
              unoptimized={true}
            />
          </div>
        </div>
        <div className='md:absolute bottom-0 md:-right-68 xl:right-0 bg-white dark:bg-black py-12 px-8 mobile:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-24'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 sm:text-center dark:text-white text-black'>
            {/* href="/prestations#energies-renouvelables" */}
            <div  className='flex flex-col sm:items-center gap-3 hover:scale-105 transition-transform duration-300'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-inherit'>
                Énergies Renouvelables
              </h3>
              <p className='text-sm text-black/70 dark:text-white/70'>
                Bureau d'études & traitement des eaux
              </p>
            </div>
            {/* href="/prestations#bim-management" */}
            <div  className='flex flex-col sm:items-center gap-3 hover:scale-105 transition-transform duration-300'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-inherit'>
                BIM Management
              </h3>
              <p className='text-sm text-black/70 dark:text-white/70'>
                Modélisation & coordination
              </p>
            </div>
            {/* href="/prestations#diagnostics"  */}
            <div className='flex flex-col sm:items-center gap-3 hover:scale-105 transition-transform duration-300'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-inherit'>
                Diagnostics
              </h3>
              <p className='text-sm text-black/70 dark:text-white/70'>
                Performance énergétique
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
