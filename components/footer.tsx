import { motion } from "framer-motion"
import { Button } from "./ui/button";

const bounce = {
    y: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeOut"
    },
    rotate: {
        duration: 12,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeOut"
    },
    x: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeOut"
    }   
}
export function Footer(){


    return (
        <div className="w-full flex justify-center items-center relative">
            <div className="bg-black w-full h-[70vh] m-4 rounded-3xl  flex overflow-hidden relative z-0">
                <motion.div className="w-64 h-64 bg-[#fd1675] rounded-full absolute left-[-100px]" transition={bounce} animate={{
                    y: ["50%", "90%"]
                }}></motion.div>
                <motion.div className="w-32 h-32 bg-violet-500 rounded-xl absolute left-[20vw] rotate-45" transition={bounce} animate={{
                    y: ["-100%", "100%"],
                    rotate: 360
                }}></motion.div>
               <motion.div className="w-0 h-0 left-[40vw] absolute
                    border-l-[5vw] border-l-transparent
                    border-b-[10vw] border-b-teal-300
                    border-r-[5vw] border-r-transparent" transition={bounce} animate={{
                        x: ["100%", "1%"],
                        rotate: 360,
                    }}> 
                </motion.div>
                <motion.div className="w-0 h-0 rounded-br-[5vw] rounded-t-[5vw] rounded-bl-[5vw] border-l-[yellow] border-r-transparent border-y-[yellow] border-solid border-[5vw] left-[60vw] absolute" transition={bounce} animate={{
                    y: ["100%", "300%"],
                }}></motion.div>
                <motion.div className="shadow-[0_0_0_1em_red,0_1em_0_1em_red,-2.5em_1.5em_0_0.5em_red,2.5em_1.5em_0_0.5em_red,-3em_-3em_0_0_red,3em_-3em_0_0_red,-2em_-2em_0_0_red,2em_-2em_0_0_red,-3em_-1em_0_0_red,-2em_-1em_0_0_red,2em_-1em_0_0_red,3em_-1em_0_0_red,-4em_0_0_0_red,-3em_0_0_0_red,3em_0_0_0_red,4em_0_0_0_red,-5em_1em_0_0_red,-4em_1em_0_0_red,4em_1em_0_0_red,5em_1em_0_0_red,-5em_2em_0_0_red,5em_2em_0_0_red,-5em_3em_0_0_red,-3em_3em_0_0_red,3em_3em_0_0_red,5em_3em_0_0_red,-2em_4em_0_0_red,-1em_4em_0_0_red,1em_4em_0_0_red,2em_4em_0_0_red] w-[1em] h-[1em] overflow-hidden ml-[65px] mr-0 mt-[50px] mb-[70px] left-[80vw] top-[60vh] absolute max-sm:left-[50vw] max-sm:top-[30vh]" transition={bounce} animate={{
                    y: ["-900%", "900%"],
                }}></motion.div>
            </div>
            <div className="w-11/12 h-[55vh] rounded-3xl flex z-10 absolute bg-white bg-opacity-15 backdrop-blur-2xl max-sm:w-9/12 justify-center items-center text-center flex-col text-white">
                <h1 className="xl:text-8xl  pb-4 text-4xl lg:text-7xl">Bereit für den nächsten Schritt?</h1>
                <span className="xl:text-xl pb-6 text-xs lg:text-base">Lassen Sie uns zusammenarbeiten und Ihre Ziele erreichen. Kontaktieren Sie uns für eine individuelle Demo und erleben Sie den Unterschied.</span>
                <Button className="bg-[#fd1675] rounded-full xl:text-lg px-8 py-6 hover:bg-[#d3005f] text-sm">Kontakt aufnehmen</Button>
            </div>
        </div>
    );
}