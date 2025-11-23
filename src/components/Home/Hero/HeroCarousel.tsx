"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  const items = [
    {
      descuento: "30",
      titulo: "True Wireless Noise Cancelling Headphone",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ipsum at risus euismod lobortis in",
      imagenSrc: "/images/hero/hero-01.png",
      slug: "#",
    },
    {
      descuento: "40",
      titulo: "True Wireless Noise Cancelling Headphone",
      descripcion:
        "Lorem ipsum dolor sit, consectetur elit nunc suscipit non ipsum nec suscipit.",
      imagenSrc: "/images/hero/hero-01.png",
      slug: "#",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <ItemCarousel
            descuento={item.descuento}
            titulo={item.titulo}
            descripcion={item.descripcion}
            imagenSrc={item.imagenSrc}
            slug={item.slug}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface ItemCarouselProps {
  descuento: string;
  titulo: string;
  descripcion: string;
  imagenSrc: string;
  slug: string;
}

const ItemCarousel = ({
  descuento,
  titulo,
  descripcion,
  imagenSrc,
  slug,
}: ItemCarouselProps) => {
  return (
    <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
      <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
        <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
          <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
            {descuento}%
          </span>
          <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
            En
            <br />
            Oferta
          </span>
        </div>
        <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
          <a href={slug}>{titulo}</a>
        </h1>
        <p>{descripcion}</p>
        <a
          href={slug}
          className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
        >
          Compralo ahora
        </a>
      </div>
      <div>
        <Image
          src={imagenSrc}
          alt={`Imagen de ${titulo}`}
          width={351}
          height={358}
        />
      </div>
    </div>
  );
};

export default HeroCarousal;
