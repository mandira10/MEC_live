import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import axios from 'axios';

interface CardProps {
    link: string;
    title: string;
    description: string;
}

export function Card({ link, title, description }: CardProps) {
    const [iconData, setIconData] = useState<any>(null);

    useEffect(() => {
        const fetchIconData = async () => {
            try {
                const response = await axios.get(link);
                setIconData(response.data);
            } catch (error) {
                console.error('Error fetching icon data:', error);
            }
        };

        fetchIconData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center text-center rounded-3xl bg-white gap-3 w-[25%] px-12 py-12 h-96 ">
            <div className="pb-10">
                <Lottie animationData={iconData} loop={1} autoPlay={false}/>
            </div>
            <div>
                <h1 className="text-2xl">{title}</h1>
            </div>
            <div>
                <p className="text-sm text-[#7c7c7c]">{description}</p>
            </div>
        </div>
    )
}
