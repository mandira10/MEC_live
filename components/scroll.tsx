import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
gsap.registerPlugin(useGSAP,ScrollTrigger);

export function Scroll(){
    const ref = useRef();
	useGSAP(() => {
		let mm = gsap.matchMedia();
		// Desktop
		mm.add("(min-width: 1280px)", () => {
			gsap.to(".box2", { 
				xPercent: -140,
				yPercent: -27,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box2",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 35%",
					
				}
			}),gsap.to(".box3", { 
				xPercent: -130,
				yPercent: 40,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box3",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 35%",
				}
			}),gsap.to(".box4", { 
				xPercent: -53,
				yPercent: 70,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box4",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 35%",
				}
			}),gsap.to(".box5", { 
				xPercent: 40,
				yPercent: 70,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box5",
					toggleActions: "play pause resume restart",
					
					scrub: 1,
					start: "top 35%",
				}
			}),gsap.to(".box6", { 
				xPercent: 110,
				yPercent: 50,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box6",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 35%",
					
				}
			}),gsap.to(".box7", { 
				xPercent: 120,
				yPercent: -13,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box7",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 35%",
				}
			}),gsap.to(".box8", { 
				xPercent: 53,
				yPercent: -80,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box8",
					toggleActions: "play pause resume restart",
					scrub: 1,
					
					start: "top 35%",
				}
			}),gsap.to(".text1", { 
				opacity: 1,
				scrollTrigger: {
					trigger: ".text1",
					toggleActions: "play pause resume restart",
					scrub: true,
					start: "top 35%",
				}
			}),gsap.to(".badge", { 
				opacity: 1,
				scrollTrigger: {
					trigger: ".badge",
					toggleActions: "play pause resume restart",
					scrub: true,
					start: "top 3%",
					end: "top 3%",
					
					
				}
			},),gsap.to(".box", { 
				xPercent: -80,
				yPercent: -80,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 35%",
					pin: ".conBox",
				}
			});
			});

		
		// Tablet

		mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
			gsap.to(".box2", { 
				xPercent: 0,
				yPercent: -80,
				scale: 0.4,
                lazy: false,
				scrollTrigger: {
					trigger: ".box2",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 30%",
					
				}
			}),gsap.to(".box3", { 
				xPercent: -130,
				yPercent: 40,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box3",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 30%",
				}
			}),gsap.to(".box4", { 
				xPercent: -80,
				yPercent: 70,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box4",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 30%",
				}
			}),gsap.to(".box5", { 
				xPercent: 0,
				yPercent: 70,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box5",
					toggleActions: "play pause resume restart",
					
					scrub: 1,
					start: "top 30%",
				}
			}),gsap.to(".box6", { 
				xPercent: 80,
				yPercent: 70,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box6",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 30%",
					
				}
			}),gsap.to(".box7", { 
				xPercent: 120,
				yPercent: -13,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box7",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 30%",
				}
			}),gsap.to(".box8", { 
				xPercent: 80,
				yPercent: -80,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box8",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 30%",
				}
			}),gsap.to(".text1", { 
				opacity: 1,
				scrollTrigger: {
					trigger: ".text1",
					toggleActions: "play pause resume restart",
					scrub: true,
					start: "top 30%",
				}
			}),gsap.to(".badge", { 
				opacity: 1,
				scrollTrigger: {
					trigger: ".badge",
					toggleActions: "play pause resume restart",
					scrub: true,
					start: "top 3%",
					end: "top 3%",
					
					
				}
			}),gsap.to(".box", { 
				xPercent: -80,
				yPercent: -80,
				scale: 0.4,
                lazy: false,
				scrollTrigger: {
					trigger: ".box",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 30%",
					pin: ".conBox",
				}
			});
			});

		// Mobile	

		mm.add("(max-width: 768px)", () => {
			gsap.to(".box4", { 
				xPercent: -35,
				yPercent: 80,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box4",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 30%",
				}
			}),gsap.to(".box5", { 
				xPercent: 40,
				yPercent: 106,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box5",
					toggleActions: "play pause resume restart",
					
					scrub: 1,
					start: "top 30%",
				}
			}),gsap.to(".box8", { 
				xPercent: 35,
				yPercent: -80,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box8",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 30%",
				}
			}),gsap.to(".text1", { 
				opacity: 1,
				scrollTrigger: {
					trigger: ".text1",
					toggleActions: "play pause resume restart",
					scrub: true,
					start: "top 30%",
				}
			}),gsap.to(".badge", { 
				opacity: 1,
				scrollTrigger: {
					trigger: ".badge",
					toggleActions: "play pause resume restart",
					scrub: true,
					start: "top 3%",
					end: "top 3%",
					
				}
			}),gsap.to(".box", { 
				xPercent: -40,
				yPercent: -90,
				scale: 0.4,
				scrollTrigger: {
					trigger: ".box",
					toggleActions: "play pause resume restart",
					scrub: 1,
					start: "top 30%",
					pin: ".conBox",
				}
			});
			});


	scope: ref }
	); 


    return (
        <div className="conBox h-screen flex justify-center text-center items-center">
				<div className="relative flex justify-center items-center text-center">
					<div  className="lg:w-96 lg:h-96 bg-black rounded-3xl box z-30 absolute w-64 h-64 ">
						<div>
							<Image
								src="/food.jpg"
								alt="Food"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								className="rounded-3xl"
							/>
							<span className="absolute bottom-[-20px] right-[-30px] z-20 bg-green-800 p-6 px-8 text-white rounded-full text-3xl opacity-0 badge">Gastronomie</span>
						</div>
					</div>
					<div className="lg:w-96 lg:h-96 bg-black rounded-3xl box2 z-10 absolute w-64 h-64 hidden lg:block">
						<div>
							<Image
								src="/doctors.jpg"
								alt="Doctors"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								className="rounded-3xl"
							/>
							<span className="absolute bottom-[-20px] right-[-30px] z-20 bg-blue-400 p-6 px-8 text-white rounded-full text-3xl opacity-0 badge ">Medical health</span>
						</div>
					</div>
					<div className="lg:w-96 lg:h-96 bg-black rounded-3xl box3 z-10 absolute w-64 h-64 hidden xl:block">,
						<div>
							<Image
								src="/dj.jpg"
								alt="Dj"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								className="rounded-3xl"
							/>
							<span className="absolute bottom-[-20px] right-[-30px] z-20 bg-violet-500 p-6 px-8 text-white rounded-full text-3xl opacity-0 badge">Entertainment</span>
						</div>
					</div>
					<div className="lg:w-96 lg:h-96 bg-black rounded-3xl box4 z-10 absolute w-64 h-64">
						<div>
							<Image
								src="/finance.jpg"
								alt="Finance"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								className="rounded-3xl"
							/>
							<span className="absolute bottom-[-20px] right-[-30px] z-20 bg-stone-500 p-6 px-8 text-white rounded-full text-3xl opacity-0 badge">Finance</span>
						</div>
					</div>
					<div className="lg:w-96 lg:h-96 bg-black rounded-3xl box5 z-10 absolute w-64 h-64">
						<div>
							<Image
								src="/car.jpg"
								alt="Car"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								className="rounded-3xl"
							/>
							<span className="absolute bottom-[-20px] right-[-30px] z-20 bg-[#7d98ab] p-6 px-8 text-white rounded-full text-3xl opacity-0 badge">Auto industry</span>
						</div>
					</div>
					<div className="lg:w-96 lg:h-96 bg-black rounded-3xl box6 z-10 absolute w-64 h-64 hidden lg:block">
						<div>
							<Image
								src="/massage.jpg"
								alt="Massage"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								className="rounded-3xl"
							/>
							<span className="absolute bottom-[-20px] right-[-30px] z-20 bg-[#c29384] p-6 px-8 text-white rounded-full text-3xl opacity-0 badge ">Wellness</span>
						</div>
					</div>
					<div className="lg:w-96 lg:h-96 bg-black rounded-3xl box7 z-10 absolute w-64 h-64 hidden xl:block">
						<div>
							<Image
								src="/therapie.jpg"
								alt="Therapie"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								className="rounded-3xl"
							/>
							<span className="absolute bottom-[-20px] right-[-30px] z-20 bg-[#8f6e5e] p-6 px-8 text-white rounded-full text-3xl opacity-0 badge ">Mental Health</span>
						</div>
					</div>
					<div className="lg:w-96 lg:h-96 bg-black rounded-3xl box8  absolute w-64 h-64 z-10">
						<div>
							<Image
								src="/fitness.jpg"
								alt="Fitness"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								className="rounded-3xl"
							/>
							<span className="absolute bottom-[-20px] right-[-30px] z-20 bg-[#525452] p-6 px-8 text-white rounded-full text-3xl opacity-0 badge">Fitness</span>
						</div>
					</div>
					<div className="flex flex-col lg:w-4/12 w-9/12 z-0">
						<h1 className="lg:text-3xl font-semibold pb-4 opacity-0 text1 text-3xl">Branchenübergreifende Expertise für Ihren Erfolg</h1>
						<span className="lg:text-base opacity-0 text1 text-sm">Unsere Leistungen passen sich an Ihre Branche an, egal ob Sie im Bereich Gesundheit, Unterhaltung oder Finanzen tätig sind. Wir bieten Lösungen, die den Unterschied machen.</span>
					</div>
				</div>
				
			</div>
    )

}