import { Rocket, Fingerprint, Gem } from "lucide-react";
import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div className="container mt-48 lg:grid-cols-2 grid grid-cols-1 gap-10 lg:px-24 md:px-32 px-4">
      <div className="flex col-span-1 lg:order-1 order-2">
        <Image
          src={"/charm3.jpg"}
          alt="a"
          width={500}
          height={500}
          className="w-full rounded-3xl"
        />
      </div>
      <div className="flex flex-col col-span-1 lg:order-2 order-1 gap-8 justify-center sm:px-16 px-8">
        <div className="flex flex-col gap-4">
          <h3 className="lg:text-6xl md:text-6xl text-5xl text-center lg:text-left">
          Das fehlende Stück zum Erfolg
          </h3>
          <h4 className="lg:text-sm md:text-base text-sm text-center lg:text-left">
          Unsere Lösungen sind schnell, individuell anpassbar und von höchster Qualität – perfekt abgestimmt auf Ihre spezifischen Anforderungen.
          </h4>
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-1/3 border bg-white border-[#e2e2e2] drop-shadow-sm flex flex-col justify-center text-center items-center rounded-xl py-6 gap-2">
            <Rocket size={50} className="" />
            <div className="text-xs font-medium">Schnell</div>
          </div>
          <div className="w-1/3 border bg-white border-[#e2e2e2] drop-shadow-sm flex flex-col justify-center text-center items-center rounded-xl py-6 gap-2">
            <Fingerprint size={50} className="" />
            <div className="text-xs font-medium">Individuell</div>
          </div>
          <div className="w-1/3 border bg-white border-[#e2e2e2] drop-shadow-sm flex flex-col justify-center text-center items-center rounded-xl py-6 gap-2">
            <Gem size={50} className="" />
            <div className="text-xs font-medium">Premium</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
