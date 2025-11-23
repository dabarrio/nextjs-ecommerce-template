import React, { useState } from "react";
import Image from "next/image";

const ShippingMethod = () => {
  const [shippingMethod, setShippingMethod] = useState("free");

  const METODOS_ENVIO = [
    {
      id: "fedex",
      name: "FedEx",
      price: 10.99,
      image: "/images/checkout/fedex.svg",
    },
    {
      id: "dhl",
      name: "DHL",
      price: 12.99,
      image: "/images/checkout/dhl.svg",
    },
  ];

  return (
    <div className="bg-white shadow-1 rounded-[10px] mt-7.5">
      <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
        <h3 className="font-medium text-xl text-dark">Método de envío</h3>
      </div>

      <div className="p-4 sm:p-8.5">
        <div className="flex flex-col gap-4">
          <label
            htmlFor="free"
            className="flex cursor-pointer select-none items-center gap-3.5"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="free"
                id="free"
                className="sr-only"
                onChange={() => setShippingMethod("free")}
              />
              {/* selectShipping === 'free' ? 'border-4 border-blue' : 'border border-gray-4' */}
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  shippingMethod === "free"
                    ? "border-4 border-blue"
                    : "border border-gray-4"
                }`}
              ></div>
            </div>
            Envío Gratis
          </label>

          {METODOS_ENVIO.map(({ id, name, price, image }) => (
            <label
              htmlFor={id}
              key={id}
              className="flex cursor-pointer select-none items-center gap-3.5"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  name={id}
                  id={id}
                  className="sr-only"
                  onChange={() => setShippingMethod(id)}
                />
                <div
                  className={`flex h-4 w-4 items-center justify-center rounded-full ${
                    shippingMethod === id
                      ? "border-4 border-blue"
                      : "border border-gray-4"
                  }`}
                ></div>
              </div>

              <div className="rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none">
                <div className="flex items-center">
                  <div className="pr-4">
                    <Image src={image} alt={name} width={64} height={18} />
                  </div>

                  <div className="border-l border-gray-4 pl-4">
                    <p className="font-semibold text-dark">${price}</p>
                    <p className="text-custom-xs">Envío estándar</p>
                  </div>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
