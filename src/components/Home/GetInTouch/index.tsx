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

                    <div className="bg-black/30 lg:py-64 md:py-28 py-10">
                        <div className="flex flex-col items-center gap-8">
                            <h2 className='text-white lg:text-52 md:text-40 text-3xl max-w-3/4 text-center font-medium'>
                                Contactez-nous pour un audit ou un devis gratuit
                            </h2>
                            <p className='text-white/80 text-lg text-center max-w-2xl'>
                                Notre équipe d'experts vous accompagne dans vos projets d'énergies renouvelables, de traitement des eaux et de BIM Management.
                            </p>
                            <Link href="/contact" className='bg-white py-4 px-8 rounded-full text-dark hover:bg-dark hover:text-white duration-300'>
                                Contactez-nous
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full py-5 bg-primary rounded-b-2xl overflow-hidden">
                    <div className="flex items-center gap-40 animate-slide">
                        <p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
                            AUDIT ÉNERGÉTIQUE GRATUIT—OPTIMISEZ VOTRE PERFORMANCE ÉNERGÉTIQUE !
                        </p>
                        <p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
                            SOLUTIONS BIM INNOVANTES—COORDINATION ET MODÉLISATION 3D !
                        </p>
                        <p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
                            ÉNERGIES RENOUVELABLES—TRANSITION ÉNERGÉTIQUE DURABLE !
                        </p>
                        <p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
                            TRAITEMENT DES EAUX—SOLUTIONS ÉCOLOGIQUES ET PERFORMANTES !
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;