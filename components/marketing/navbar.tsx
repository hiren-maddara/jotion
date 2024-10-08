"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils"
import Logo from "./logo"
import { ModeToggle } from "../mode-toggle"
import { useConvexAuth } from "convex/react"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
import { Spinner } from "../spinner"
import Link from "next/link"

export default function Navbar() {
    const { isAuthenticated, isLoading } = useConvexAuth()
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
                {isLoading && (
                    <Spinner size="sm" />
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm">
                                Log in
                            </Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button size="sm">
                                Get Jotion free
                            </Button>
                        </SignInButton>
                    </>
                )}

                {isAuthenticated && !isLoading && (
                    <>

                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                        >
                            <Link href="/documents">
                                Enter Jotion
                            </Link>

                        </Button>
                        <UserButton
                            afterSignOutUrl="/"
                        />
                    </>

                )}
                <ModeToggle />
            </div>

        </div>
    )
}