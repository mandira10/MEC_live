import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon, MountainIcon } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  return (
    <>
      <header className="h-20 fixed px-5 z-50 bg-white w-full">
        <div className="flex h-full justify-between items-center">
          <Link href="#" className="mr-6 lg:flex" prefetch={false}>
            <Image src="/logo.png" width={100} height={100} alt="logo" />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <MenuIcon className="h-8 w-8" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="logo"
                className="mt-6"
              />
              <div className="grid gap-2 py-6">
                {/*
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  Home
                </Link>
                */}
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  Über uns
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  Unsere Services
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <button className="hidden lg:flex group relative inline-flex h-12 items-center justify-center bg-red-500 px-6 font-medium text-neutral-50 rounded-3xl">
            <span>Kontakt aufnehmen</span>
            <div className="relative ml-1 h-5 w-5 overflow-hidden">
              <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 -translate-x-4"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;