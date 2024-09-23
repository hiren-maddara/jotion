import Footer from "@/components/marketing/footer";
import Heading from "@/components/marketing/heading";
import Heroes from "@/components/marketing/heroes";

export default function LandingPage() {
    return (
        <div className="min-h-full flex flex-col p-4 dark:bg-[#1f1f1f]">
            <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1">
                <Heading />
                <Heroes />
            </div>

            <Footer />

        </div>
    )
}