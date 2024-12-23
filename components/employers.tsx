import React from "react";
import Image from "next/image";
import { CheckIcon, StarIcon } from "lucide-react";

const Employers = () => {
  return (
    <>
      <div className="container lg:grid-cols-2 grid grid-cols-1 gap-10 lg:px-8 md:px-32 px-10 mb-40">
        <div className="flex flex-col col-span-1 gap-8 justify-center sm:px-16 px-4">
          <div className="flex flex-col gap-4">
            <h3 className="lg:text-6xl md:text-6xl text-5xl text-center lg:text-left">
            Leistungen
            </h3>
            <h4 className="lg:text-sm md:text-base text-sm text-center lg:text-left font-medium">
            ,die Ihre Marke wachsen lassen
            </h4>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full border-t bg-white border-[#e2e2e2] flex flex-row justify-start items-center pt-3 gap-2">
              <div className="lg:h-14 lg:w-14 h-10 w-10">
                <CheckIcon className="text-[#64d71e] bg-[#d4ffb9] p-2 rounded-xl lg:h-14 lg:w-14 h-10 w-10" />
              </div>
              <div className="md:text-sm text-xs">
              Maßgeschneidertes Webdesign, das Ihre Marke widerspiegelt
              </div>
            </div>
            <div className="w-full border-t bg-white border-[#e2e2e2] flex flex-row justify-start items-center pt-3 gap-2">
              <div className="lg:h-14 lg:w-14 h-10 w-10">
                <CheckIcon className="text-[#64d71e] bg-[#d4ffb9] p-2 rounded-xl lg:h-14 lg:w-14 h-10 w-10" />
              </div>
              <div className="md:text-sm text-xs">
              SEO-Optimierung für bessere Sichtbarkeit und mehr Reichweite
              </div>
            </div>
            <div className="w-full border-t bg-white border-[#e2e2e2] flex flex-row justify-start items-center pt-3 gap-2">
              <div className="lg:h-14 lg:w-14 h-10 w-10">
                <CheckIcon className="text-[#64d71e] bg-[#d4ffb9] p-2 rounded-xl lg:h-14 lg:w-14 h-10 w-10" />
              </div>
              <div className="md:text-sm text-xs">
              Social Media Management, das Ihre Zielgruppe anspricht
              </div>
            </div>
            <div className="w-full border-t bg-white border-[#e2e2e2] flex flex-row justify-start items-center pt-3 gap-2">
              <div className="lg:h-14 lg:w-14 h-10 w-10">
                <CheckIcon className="text-[#64d71e] bg-[#d4ffb9] p-2 rounded-xl lg:h-14 lg:w-14 h-10 w-10" />
              </div>
              <div className="md:text-sm text-xs">
              Individuelle digitale Lösungen für alle Herausforderungen
              </div>
            </div>
          </div>
        </div>
        <div className="flex col-span-1">
          <Image
            src={"/leistung4.jpg"}
            alt="a"
            width={500}
            height={500}
            className="w-full rounded-3xl"
          />
        </div>
      </div>
      {/*<div className="container lg:grid-cols-2 grid grid-cols-1 gap-10 lg:px-8 md:px-32 px-10 mb-20">
        <div className="flex col-span-1 lg:order-1 order-2">
          <Image
            src={"/a.webp"}
            alt="a"
            width={500}
            height={500}
            className="w-full aspect-square rounded-3xl"
          />
        </div>
        <div className="flex flex-col col-span-1 gap-8 justify-center sm:px-16 px-4 lg:order-2 order-1">
          <div className="flex flex-col gap-4">
            <h3 className="lg:text-6xl md:text-6xl text-5xl text-center lg:text-left">
              Employers
            </h3>
            <h4 className="lg:text-sm md:text-base text-sm text-center lg:text-left font-medium">
              Tailor your benefits and recognition programs to perfection and
              become a memorable employer.
            </h4>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full border-t bg-white border-[#e2e2e2] flex flex-row justify-start items-center pt-3 gap-2">
              <div className="lg:h-14 lg:w-14 h-10 w-10">
                <CheckIcon className="text-[#64d71e] bg-[#d4ffb9] p-2 rounded-xl lg:h-14 lg:w-14 h-10 w-10" />
              </div>
              <div className="md:text-sm text-xs">
                Select from 20 wellness categories that reflect your company's
                values
              </div>
            </div>
            <div className="w-full border-t bg-white border-[#e2e2e2] flex flex-row justify-start items-center pt-3 gap-2">
              <div className="lg:h-14 lg:w-14 h-10 w-10">
                <CheckIcon className="text-[#64d71e] bg-[#d4ffb9] p-2 rounded-xl lg:h-14 lg:w-14 h-10 w-10" />
              </div>
              <div className="md:text-sm text-xs">
                Select from 20 wellness categories that reflect your company's
                values
              </div>
            </div>
            <div className="w-full border-t bg-white border-[#e2e2e2] flex flex-row justify-start items-center pt-3 gap-2">
              <div className="lg:h-14 lg:w-14 h-10 w-10">
                <CheckIcon className="text-[#64d71e] bg-[#d4ffb9] p-2 rounded-xl lg:h-14 lg:w-14 h-10 w-10" />
              </div>
              <div className="md:text-sm text-xs">
                Select from 20 wellness categories that reflect your company's
                values
              </div>
            </div>
            <div className="w-full border-t bg-white border-[#e2e2e2] flex flex-row justify-start items-center pt-3 gap-2">
              <div className="lg:h-14 lg:w-14 h-10 w-10">
                <CheckIcon className="text-[#64d71e] bg-[#d4ffb9] p-2 rounded-xl lg:h-14 lg:w-14 h-10 w-10" />
              </div>
              <div className="md:text-sm text-xs">
                Select from 20 wellness categories that reflect your company's
                values
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </>
  );
};

export default Employers;
