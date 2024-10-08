import Navbar from "@/components/marketing/navbar";
import { ReactNode } from "react";

export default function MarketingLayout({ children }: { children: ReactNode }) {
    return (
        <div className="h-full dark:bg-[#1f1f1f]">
            <Navbar />

            <main className="h-full pt-40">
                {children}
            </main>

        </div>
    );
}
