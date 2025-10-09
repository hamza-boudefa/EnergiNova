import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="absolute left-0 top-0 -z-10">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          loading="lazy"
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          loading="lazy"
        />
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 md:gap-8 lg:gap-10">
          <div className="lg:col-span-6 col-span-12 text-center lg:text-left">
            <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex flex-col gap-2.5 items-center justify-center lg:justify-start">
              <Icon icon="ph:gear-fill" className="text-xl sm:text-2xl text-primary" />
              Nos Services
            </p>
            {/* <h2 className="lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-medium leading-[1.2] text-dark dark:text-white">
              Solutions innovantes
              pour la transition énergétique.
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg lg:max-w-full leading-[1.3] md:max-w-3/4">
              EnergiNova Solutions vous accompagne dans vos projets d'énergies renouvelables, de traitement des eaux et de BIM Management avec expertise et innovation.
            </p> */}
            <Link href="/prestations" className="py-3 sm:py-4 px-6 sm:px-8 bg-primary text-sm sm:text-base leading-4 inline-block text-white rounded-full font-semibold mt-6 sm:mt-8 hover:bg-dark duration-300">
              Découvrir nos prestations
            </Link>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group h-64 sm:h-80 md:h-96">
              <Link href="/prestations#energies-renouvelables">
                <Image
                  src="/images/categories/renewable_energy.jpg"
                  alt="energies-renouvelables"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
                />
              </Link>
              <Link href="/prestations#energies-renouvelables" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between p-4 sm:pl-6 md:pl-10 sm:pb-6 md:pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-2 sm:mt-4 mr-2 sm:mr-4">
                  <div className="bg-white text-dark rounded-full w-fit p-2 sm:p-3 md:p-4">
                    <Icon icon="ph:arrow-right" width={20} height={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2.5">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
                    Énergies Renouvelables
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base leading-5 sm:leading-6 pr-4">
                    Bureau d'études spécialisé en énergies renouvelables et traitement des eaux pour vos projets durables.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group h-64 sm:h-80 md:h-96">
              <Link href="/prestations#bim-management">
                <Image
                  src="/images/categories/BIM.jpg"
                  alt="bim-management"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
                />
              </Link>
              <Link href="/prestations#bim-management" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between p-4 sm:pl-6 md:pl-10 sm:pb-6 md:pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-2 sm:mt-4 mr-2 sm:mr-4">
                  <div className="bg-white text-dark rounded-full w-fit p-2 sm:p-3 md:p-4">
                    <Icon icon="ph:arrow-right" width={20} height={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2.5">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
                    BIM Management
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base leading-5 sm:leading-6 pr-4">
                    Coordination BIM, modélisation numérique et gestion de données techniques pour vos projets de construction.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group h-64 sm:h-80 md:h-96">
              <Link href="/prestations#diagnostics">
                <Image
                  src="/images/categories/diagnostic.jpg"
                  alt="diagnostics"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
                />
              </Link>
              <Link href="/prestations#diagnostics" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between p-4 sm:pl-6 md:pl-10 sm:pb-6 md:pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-2 sm:mt-4 mr-2 sm:mr-4">
                  <div className="bg-white text-dark rounded-full w-fit p-2 sm:p-3 md:p-4">
                    <Icon icon="ph:arrow-right" width={20} height={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2.5">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
                    Diagnostics & Performance
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base leading-5 sm:leading-6 pr-4">
                    Diagnostic de performance énergétique, audit énergétique et solutions de rénovation pour optimiser vos bâtiments.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
