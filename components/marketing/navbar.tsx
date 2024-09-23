"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils"
import Logo from "./logo"
import { ModeToggle } from "../mode-toggle"

export default function Navbar() {
    const scrolled = useScrollTop()
    return (
        <div className={
            cn(
                " z-50 fixed top-0 flex items-center w-full p-6 dark:bg-[#1f1f1f]",
                scrolled ? 'border-b shadow-sm backdrop-blur-lg' : null
            )
        }>
            <Logo />

            <div className="flex md:ml-auto md:justify-end justify-between w-full items-center gap-x-2">

                <ModeToggle />
            </div>

        </div>
    )
}