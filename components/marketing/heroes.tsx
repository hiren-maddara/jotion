import Image from "next/image";

export default function Heroes() {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:h-[350px] md:h-[400px]">
                    <Image
                        fill
                        src="/documents.png"
                        className="object-contain dark:hidden"
                        alt="Documents"
                    />
                    <Image
                        fill
                        src="/documents-dark.png"
                        className="object-contain hidden dark:block"
                        alt="Documents"
                    />
                </div>

                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image
                        src="/reading.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Reading"
                    />
                    <Image
                        src="/reading-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Reading"
                    />

                </div>

            </div>

        </div>
    )
}