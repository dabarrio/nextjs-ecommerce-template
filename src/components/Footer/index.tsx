import Image from "next/image";
import Ubicacion from "./svg/Ubicacion";
import Telefono from "./svg/Telefono";
import Mail from "./svg/Mail";
import Instagram from "./svg/Instagram";

const Footer = () => {
  const year = new Date().getFullYear();

    const CUENTA = [
    {
      label: "Mi cuenta",
      href: "#",
    },
    {
      label: "Iniciar sesión / Registrarse",
      href: "#",
    },
    {
      label: "Carrito",
      href: "#",
    },
    {
      label: "Lista de deseos",
      href: "#",
    },
    {
      label: "Tienda",
      href: "#",
    },
  ];

  const ENLACES_RAPIDOS = [
    {
      label: "Política de privacidad",
      href: "#",
    },
    {
      label: "Política de reembolso",
      href: "#",
    },
    {
      label: "Términos y condiciones",
      href: "#",
    },
    {
      label: "Preguntas frecuentes",
      href: "#",
    },
    {
      label: "Contacto",
      href: "#",
    },
  ];

  return (
   <footer className="overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- footer menu start --> */}
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 xl:justify-between pt-17.5 xl:pt-22.5 pb-10 xl:pb-15">
          <div className="max-w-[330px] w-full">
            <h2 className="mb-7.5 text-custom-1 font-medium text-black">
              Ayuda y soporte
            </h2>

            <ul className="flex flex-col gap-3">
              <li className="flex gap-4.5">
                <Ubicacion />
                Mar del Plata, Buenos Aires, Argentina.
              </li>

              <li>
                <a href="#" className="flex items-center gap-4.5">
                  <Telefono />
                  (+54) 223 123-4567
                </a>
              </li>

              <li>
                <a href="#" className="flex items-center gap-4.5">
                  <Mail />
                  soporte@coso.com.ar
                </a>
              </li>
            </ul>

            {/* <!-- Social Links start --> */}
            <div className="flex items-center gap-4 mt-7.5">
              {/* <a
                href="#"
                aria-label="Facebook Social Link"
                className="flex ease-out duration-200 hover:text-blue"
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99984 0.666504C7.48706 0.666504 6.09165 1.04648 4.81361 1.80644C3.53557 2.54019 2.51836 3.5491 1.76197 4.83317C1.03166 6.11724 0.666504 7.51923 0.666504 9.03915C0.666504 10.428 0.966452 11.7252 1.56635 12.9307C2.19233 14.1099 3.04 15.0926 4.10938 15.8788C5.17876 16.6649 6.37855 17.1497 7.70876 17.3332V11.4763H5.59608V9.03915H7.70876V7.19166C7.70876 6.16965 7.98262 5.37038 8.53035 4.79386C9.10417 4.21734 9.8736 3.92908 10.8386 3.92908C11.4646 3.92908 12.0906 3.98149 12.7166 4.08632V6.16965H11.6602C11.1908 6.16965 10.8386 6.30068 10.6039 6.56273C10.3952 6.79858 10.2909 7.09994 10.2909 7.46682V9.03915H12.6383L12.2471 11.4763H10.2909V17.3332C11.6472 17.1235 12.86 16.6256 13.9294 15.8395C14.9988 15.0533 15.8334 14.0706 16.4333 12.8913C17.0332 11.6859 17.3332 10.4018 17.3332 9.03915C17.3332 7.51923 16.955 6.11724 16.1986 4.83317C15.4683 3.5491 14.4641 2.54019 13.1861 1.80644C11.908 1.04648 10.5126 0.666504 8.99984 0.666504Z"
                    fill=""
                  />
                  <path
                    opacity="0.04"
                    d="M7.70887 11.4764V17.3333H10.291V11.4764H12.2472L12.6384 9.03926H10.291V7.46693C10.291 7.10006 10.3954 6.7987 10.604 6.56285C10.8388 6.30079 11.1909 6.16977 11.6604 6.16977H12.7167V4.08643C12.0907 3.98161 11.4647 3.9292 10.8388 3.9292C9.87371 3.9292 9.10428 4.21746 8.53046 4.79398C7.98273 5.3705 7.70887 6.16977 7.70887 7.19178V9.03926H5.59619V11.4764H7.70887Z"
                    fill=""
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter Social Link"
                className="flex ease-out duration-200 hover:text-blue"
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3332 4.91293C17.7353 5.18229 17.0875 5.36594 16.39 5.46389C17.1124 5.02312 17.6107 4.39869 17.8847 3.59061C17.2121 3.98241 16.4896 4.25177 15.7173 4.39869C15.0447 3.68856 14.1976 3.3335 13.1762 3.3335C12.2544 3.3335 11.4572 3.66407 10.7846 4.32523C10.1119 4.98639 9.77562 5.78223 9.77562 6.71274C9.77562 6.95762 9.81299 7.21473 9.88773 7.48409C8.49261 7.41063 7.17223 7.06781 5.92659 6.45563C4.70587 5.81896 3.67198 4.98639 2.82495 3.95792C2.526 4.47216 2.37652 5.03536 2.37652 5.64755C2.37652 6.23524 2.51354 6.77396 2.78758 7.26371C3.06162 7.75345 3.42286 8.14525 3.87129 8.4391C3.34812 8.4391 2.83741 8.30442 2.33915 8.03506V8.07179C2.33915 8.87987 2.60073 9.59 3.1239 10.2022C3.64707 10.8144 4.29481 11.2062 5.0671 11.3776C4.79306 11.451 4.49411 11.4878 4.17024 11.4878C3.97094 11.4878 3.75918 11.4633 3.53496 11.4143C3.75918 12.0999 4.15778 12.6632 4.73078 13.1039C5.32869 13.5202 5.98888 13.7406 6.71135 13.7651C5.49062 14.7201 4.08305 15.1976 2.48863 15.1976C2.21459 15.1976 1.94054 15.1853 1.6665 15.1609C3.26092 16.1648 5.00482 16.6668 6.89819 16.6668C8.89122 16.6668 10.66 16.1648 12.2046 15.1609C13.6247 14.2793 14.7333 13.0794 15.5305 11.5612C16.2779 10.1165 16.6516 8.635 16.6516 7.11678L16.6142 6.67601C17.2868 6.21075 17.8598 5.62306 18.3332 4.91293Z"
                    fill=""
                  />
                </svg>
              </a> */}
              <a
                href="#"
                aria-label="Instagram Social Link"
                className="flex ease-out duration-200 hover:text-blue"
              >
                <Instagram />
              </a>
              {/* <a
                href="#"
                aria-label="Linkedin Social Link"
                className="flex ease-out duration-200 hover:text-blue"
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6535 1.6665C17.1222 1.6665 17.5129 1.83577 17.8254 2.17432C18.1639 2.48682 18.3332 2.87744 18.3332 3.34619V16.6535C18.3332 17.1222 18.1639 17.5259 17.8254 17.8644C17.5129 18.1769 17.1222 18.3332 16.6535 18.3332H3.34619C2.87744 18.3332 2.4738 18.1769 2.13525 17.8644C1.82275 17.5259 1.6665 17.1222 1.6665 16.6535V3.34619C1.6665 2.87744 1.82275 2.48682 2.13525 2.17432C2.4738 1.83577 2.87744 1.6665 3.34619 1.6665H16.6535ZM15.4295 15.4295V11.0155C15.4295 10.2603 15.1561 9.62223 14.6092 9.1014C14.0884 8.55452 13.4504 8.28109 12.6952 8.28109C12.3306 8.28109 11.966 8.38525 11.6014 8.59359C11.2368 8.80192 10.9634 9.06234 10.7811 9.37484V8.43734H8.43734V15.4295H10.7811V11.2889C10.7811 10.9764 10.8853 10.716 11.0936 10.5077C11.328 10.2733 11.6014 10.1561 11.9139 10.1561C12.2524 10.1561 12.5259 10.2733 12.7342 10.5077C12.9686 10.716 13.0858 10.9764 13.0858 11.2889V15.4295H15.4295ZM5.74202 7.14827C6.13265 7.14827 6.45817 7.01807 6.71859 6.75765C7.00505 6.47119 7.14827 6.13265 7.14827 5.74202C7.14827 5.3514 7.00505 5.02588 6.71859 4.76546C6.45817 4.479 6.13265 4.33577 5.74202 4.33577C5.3514 4.33577 5.01286 4.479 4.7264 4.76546C4.46598 5.02588 4.33577 5.3514 4.33577 5.74202C4.33577 6.13265 4.46598 6.47119 4.7264 6.75765C5.01286 7.01807 5.3514 7.14827 5.74202 7.14827ZM6.87484 15.4295V8.43734H4.57015V15.4295H6.87484Z"
                    fill=""
                  />
                  <path
                    opacity="0.04"
                    d="M15.4297 15.4297V11.0156C15.4297 10.2604 15.1562 9.6224 14.6094 9.10156C14.0885 8.55469 13.4505 8.28125 12.6953 8.28125C12.3307 8.28125 11.9661 8.38542 11.6016 8.59375C11.237 8.80208 10.9635 9.0625 10.7812 9.375V8.4375H8.4375V15.4297H10.7812V11.2891C10.7812 10.9766 10.8854 10.7161 11.0938 10.5078C11.3281 10.2734 11.6016 10.1562 11.9141 10.1562C12.2526 10.1562 12.526 10.2734 12.7344 10.5078C12.9688 10.7161 13.0859 10.9766 13.0859 11.2891V15.4297H15.4297ZM5.74219 7.14844C6.13281 7.14844 6.45833 7.01823 6.71875 6.75781C7.00521 6.47135 7.14844 6.13281 7.14844 5.74219C7.14844 5.35156 7.00521 5.02604 6.71875 4.76562C6.45833 4.47917 6.13281 4.33594 5.74219 4.33594C5.35156 4.33594 5.01302 4.47917 4.72656 4.76562C4.46615 5.02604 4.33594 5.35156 4.33594 5.74219C4.33594 6.13281 4.46615 6.47135 4.72656 6.75781C5.01302 7.01823 5.35156 7.14844 5.74219 7.14844ZM6.875 15.4297V8.4375H4.57031V15.4297H6.875Z"
                    fill=""
                  />
                </svg>
              </a> */}
            </div>
            {/* <!-- Social Links end --> */}
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-custom-1 font-medium text-black">
              Cuenta
            </h2>

            <ul className="flex flex-col gap-3.5">
              {CUENTA.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="ease-out duration-200 hover:text-blue"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-custom-1 font-medium text-black">
              Enlace rápidos
            </h2>

            <ul className="flex flex-col gap-3">
              {ENLACES_RAPIDOS.map((item, index) => (
                <li key={index}>
                  <a
                    className="ease-out duration-200 hover:text-blue"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <!-- footer menu end --> */}
      </div>

      {/* <!-- footer bottom start --> */}
      <div className="py-5 xl:py-7.5 bg-gray-100">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-5 flex-wrap items-center justify-between">
            <p className="text-black font-medium">
              &copy; {year}. Todos los derechos reservados coso.
            </p>

            {/* <div className="flex flex-wrap items-center gap-4">
              <p className="font-medium">We Accept:</p>

              <div className="flex flex-wrap items-center gap-6">
                <a href="#" aria-label="payment system with visa card">
                  <Image
                    src="/images/payment/payment-01.svg"
                    alt="visa card"
                    width={66}
                    height={22}
                  />
                </a>
                <a href="#" aria-label="payment system with paypal">
                  <Image
                    src="/images/payment/payment-02.svg"
                    alt="paypal"
                    width={18}
                    height={21}
                  />
                </a>
                <a href="#" aria-label="payment system with master card">
                  <Image
                    src="/images/payment/payment-03.svg"
                    alt="master card"
                    width={33}
                    height={24}
                  />
                </a>
                <a href="#" aria-label="payment system with apple pay">
                  <Image
                    src="/images/payment/payment-04.svg"
                    alt="apple pay"
                    width={52.94}
                    height={22}
                  />
                </a>
                <a href="#" aria-label="payment system with google pay">
                  <Image
                    src="/images/payment/payment-05.svg"
                    alt="google pay"
                    width={56}
                    height={22}
                  />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- footer bottom end --> */}
    </footer>
  );
};

export default Footer;
