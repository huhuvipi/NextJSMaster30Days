import Link from "next/link";
export const metadata = {
    title: "About Us",
    description: "About our company and team",
}

export default function AboutPage() {
    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold">About Page Day 1 🚀</h1> 
            <Link href="/" className="text-blue-600 font-bold underline mt-4 block">Home</Link>
            <Link href="/contact" className="text-blue-600 font-bold underline mt-4 block">Contact</Link>
        </main>
    )
}