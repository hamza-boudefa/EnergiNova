import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ: React.FC = () => {
    return (
        <section id='faqs' className='py-12 md:py-16 lg:py-20'>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="grid lg:grid-cols-1 gap-10">
                    {/* <div className='lg:mx-0 mx-auto'>
                        <Image
                            src="/images/faqs/faq-image.png"
                            alt='image'
                            width={680}
                            height={644}
                            className='lg:w-full'
                            unoptimized={true}
                        />
                    </div> */}
                    <div className='lg:px-12 px-0'>
                        <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2 items-center">
                            <Icon icon="ph:question-fill" className="text-xl sm:text-2xl text-primary" />
                            Questions fréquentes
                        </p>
                        <h2 className='text-3xl sm:text-40 lg:text-52 leading-[1.2] font-medium text-dark dark:text-white mt-4 mb-4'>
                            Tout sur EnergiNova Solutions
                        </h2>
                        <p className='text-sm sm:text-base text-dark/50 dark:text-white/50 pr-0 sm:pr-10 lg:pr-20 mb-6'>
                            Retrouvez les réponses aux questions les plus courantes sur nos services en énergies renouvelables, BIM Management et diagnostics énergétiques.
                        </p>
                        <div className="my-8">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full flex flex-col gap-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. Combien de temps faut-il pour réaliser un audit énergétique ?</AccordionTrigger>
                                    <AccordionContent>
                                        Un audit énergétique complet prend généralement entre 2 à 4 semaines selon la taille et la complexité du bâtiment. Nous vous fournissons un planning détaillé lors de notre premier échange.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. Proposez-vous des devis gratuits ?</AccordionTrigger>
                                    <AccordionContent>
                                        Oui, nous proposons des devis gratuits et sans engagement pour tous nos services. Contactez-nous pour discuter de votre projet et recevoir une estimation personnalisée.
                                    </AccordionContent>
                                </AccordionItem>
                                {/* <AccordionItem value="item-3">
                                    <AccordionTrigger>3. Quelles sont les aides financières disponibles ?</AccordionTrigger>
                                    <AccordionContent>
                                        Nous vous informons sur toutes les aides disponibles (MaPrimeRénov', CEE, subventions locales) et vous accompagnons dans vos démarches pour optimiser le financement de votre projet.
                                    </AccordionContent>
                                </AccordionItem> */}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
