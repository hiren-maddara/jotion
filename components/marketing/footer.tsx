import { Button } from "../ui/button";
import Logo from "./logo";

export default function Footer() {
    return (
        <footer className="flex items-center w-full bg-background p-6 z-50 dark:bg-[#1f1f1f]">
            <Logo />

            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Button variant="link" size="sm" className="text-inherit">
                    Privacy policy
                </Button>
                <Button variant="link" size="sm" className="text-inherit">
                    Terms & Conditions
                </Button>
            </div>

        </footer>
    )
}