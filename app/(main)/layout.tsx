"use client"

import Navigation from "@/components/documents/navigation";
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
    const { isAuthenticated, isLoading } = useConvexAuth()

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-full">
                <Spinner size="lg" />
            </div>
        )
    }

    if (!isAuthenticated) {
        return redirect("/")
    }

    return (
        <div className="h-full flex dark:bg-[#1f1f1f]">
            <Navigation />
            <main className="flex-1 h-full overflow-y-auto">

                {children}
            </main>
        </div>
    )
}