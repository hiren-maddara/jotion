import Image from "next/image";
import { Poppins } from 'next/font/google'

import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

export default function Logo() {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
                className="dark:hidden"
                alt="Logo"
                src="/logo.svg"
                height="40"
                width="40"
            />
            <Image
                className="hidden dark:block"
                alt="Logo Dark"
                src="/logo-dark.svg"
                height="40"
                width="40"
            />
            <p className={cn(
                "font-semibold", poppins.className
            )}>
                Jotion
            </p>
        </div>
    )
}