import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  const bannerData = {
    title: "Apple iPhone 14 Plus",
    subtitle: "Hasta un 30 % de descuento",
    description:
      "El iPhone 14 tiene el mismo chip ultrarrápido que el iPhone 14 Pro, el A16 Bionic, con una GPU de 5 núcleos, que potencia todas las últimas funciones.",
    href: "#",
    imageSrc: "/images/promo/promo-01.png",
  };

  const bannersData = [
    {
      title: "Cinta de correr ProForm",
      subtitle: "Entrena en casita",
      description: "Hasta un 20 % de descuento.",
      href: "#",
      imageSrc: "/images/promo/promo-02.png",
      colorPrimary: "#DBF4F3",
      colorSecondary: "teal",
    },
    {
      title: "Apple Watch Ultra",
      subtitle: "40 % de descuento",
      description:
        "La caja de titanio de grado aeroespacial logra el equilibrio perfecto de todo.",
      href: "#",
      imageSrc: "/images/promo/promo-03.png",
      colorPrimary: "#FFECE1",
      colorSecondary: "orange",
    },
  ];

  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <BannerPrincipal
          title={bannerData.title}
          subtitle={bannerData.subtitle}
          description={bannerData.description}
          href={bannerData.href}
          imageSrc={bannerData.imageSrc}
        />

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {bannersData.map((banner, index) => {
            return (
              <BannerSecondary
                key={index}
                title={banner.title}
                subtitle={banner.subtitle}
                description={banner.description}
                href={banner.href}
                imageSrc={banner.imageSrc}
                colorPrimary={banner.colorPrimary}
                colorSecondary={banner.colorSecondary}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface BannerPrincipalProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  imageSrc: string;
  colorPrimary?: string;
  colorSecondary?: string;
}

const BannerPrincipal = ({
  title,
  subtitle,
  description,
  href,
  imageSrc,
}: BannerPrincipalProps) => {
  return (
    <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
      <div className="max-w-[550px] w-full">
        <span className="block font-medium text-xl text-dark mb-3">
          {title}
        </span>

        <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
          {subtitle}
        </h2>

        <p>{description}</p>

        <a
          href={href}
          className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
        >
          Comprar ahora
        </a>
      </div>

      <Image
        src={imageSrc}
        alt="promo img"
        className="absolute bottom-0 right-4 lg:right-26 -z-1"
        width={274}
        height={350}
      />
    </div>
  );
};

const BannerSecondary = ({
  title,
  subtitle,
  description,
  href,
  imageSrc,
  colorPrimary,
  colorSecondary,
}: BannerPrincipalProps) => {
  return (
    <div
      className={`relative z-1 overflow-hidden rounded-lg bg-[${colorPrimary}] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10`}
    >
      <Image
        src={imageSrc}
        alt="promo img"
        className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
        width={200}
        height={200}
      />
      <div>
        <span className="block text-lg text-dark mb-1.5">{title}</span>
        <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
          {subtitle}
        </h2>
        <p className="max-w-[285px] text-custom-sm">{description}</p>
        <a
          href={href}
          className={`inline-flex font-medium text-custom-sm text-white bg-${colorSecondary} py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-${colorSecondary}-dark mt-9`}
        >
          Comprar ahora
        </a>
      </div>
    </div>
  );
};

export default PromoBanner;
