import Socials from "@/components/Socials";

export default function Footer() {
    return <footer className="text-center py-4 mt-12 bg-foreground">
        <div className="text-background">
            <p>© 2026 Marjan Pascolo</p>
            <div className="flex justify-center gap-4 pt-2">
                <Socials/>
            </div>
            <br/>
            <br/>
            <p>Built with Next.js and Tailwind4</p>
        </div>

    </footer>
}