import Link from 'next/link';

const GetInTouch: React.FC = () => {
    return (
        <section>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="relative rounded-t-2xl overflow-hidden">
                    <video
                        className="w-full h-full absolute top-0 left-0 object-cover -z-10"
                        autoPlay
                        loop
                        muted
                        aria-label="Video background showing luxurious real estate"
                    >
                        <source src="/images/video.mp4" type="video/mp4" />
                    </video>

                    <div className="bg-black/30 py-16 sm:py-20 md:py-28 lg:py-64 px-4">
                        <div className="flex flex-col items-center gap-6 sm:gap-8">
                            <h2 className='text-white text-2xl sm:text-3xl md:text-40 lg:text-52 max-w-[90%] sm:max-w-3/4 text-center font-medium leading-tight'>
                                Contactez-nous pour un audit ou un devis gratuit
                            </h2>
                            <p className='text-white/80 text-base sm:text-lg text-center max-w-2xl px-4'>
                                Notre équipe d'experts vous accompagne dans vos projets d'énergies renouvelables, de traitement des eaux et de BIM Management.
                            </p>
                            <Link href="/contact" className='bg-white py-3 sm:py-4 px-6 sm:px-8 rounded-full text-dark hover:bg-dark hover:text-white duration-300 text-sm sm:text-base font-semibold'>
                                Contactez-nous
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full py-4 sm:py-5 bg-primary rounded-b-2xl overflow-hidden">
                    <div className="flex items-center gap-20 sm:gap-40 animate-slide">
                        <p className='text-white text-sm sm:text-base whitespace-nowrap relative after:absolute after:w-12 sm:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-16 sm:after:-right-32'>
                            AUDIT ÉNERGÉTIQUE GRATUIT—OPTIMISEZ VOTRE PERFORMANCE ÉNERGÉTIQUE !
                        </p>
                        <p className='text-white text-sm sm:text-base whitespace-nowrap relative after:absolute after:w-12 sm:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-16 sm:after:-right-32'>
                            SOLUTIONS BIM INNOVANTES—COORDINATION ET MODÉLISATION 3D !
                        </p>
                        <p className='text-white text-sm sm:text-base whitespace-nowrap relative after:absolute after:w-12 sm:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-16 sm:after:-right-32'>
                            ÉNERGIES RENOUVELABLES—TRANSITION ÉNERGÉTIQUE DURABLE !
                        </p>
                        <p className='text-white text-sm sm:text-base whitespace-nowrap relative after:absolute after:w-12 sm:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-16 sm:after:-right-32'>
                            TRAITEMENT DES EAUX—SOLUTIONS ÉCOLOGIQUES ET PERFORMANTES !
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;