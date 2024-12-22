import Link from "next/link"
import { ModeToggle } from "./theme-toggle-button"
import { buttonVariants } from "./ui/button"

export const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
                <h1>
                    TASKS
                </h1>
            </Link>

            <div className="flex gap-x-2 items-start">
                <Link href="/" className={buttonVariants({ variant: 'outline' })}>
                    Tasks
                </Link>
                <Link href="/new" className={buttonVariants({ variant: 'outline' })}>
                    Create Task
                </Link>
                <ModeToggle />
            </div>
        </div>
    )
}
