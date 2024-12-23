import Image from 'next/image'
export function Pablo(){



    return (
        <div className="w-[85%] pt-10 xl:pt-24 rounded-3xl 2xl:w-[60%]">
            <Image
				src="/pablo2.jpg"
				alt="Pablo"
                width={2600}
                height={2000}
				className="rounded-3xl"
			/>
        </div>
    )
}