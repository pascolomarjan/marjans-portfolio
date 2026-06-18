import { dataUrl } from "@/data/background-data-url";
import { StaticImageData } from "next/image"
import Image from "next/image";

export default function PageTitle(
    {
        title,
        backgroundPic,
    }:
        {
            title: string,
            backgroundPic?: StaticImageData,
        }
) {
    return (
        <div className="overflow-hidden relative">
            <div className="relative z-10">
                <h1 className="text-center py-24 text-shadow-md">
                    {title}
                </h1>
            </div>

            {
                backgroundPic && 
                    <Image
                        src={backgroundPic}
                        alt="Background Pattern"
                        placeholder="blur"
                        blurDataURL={dataUrl}
                        quality={50}
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                        className="blur-[2px] asbolute -z-10"
                    />
            }

        </div>
    )
}