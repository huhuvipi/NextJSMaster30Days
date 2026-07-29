import Link from "next/link";
export const metadata = {
    title: "Contact",
    description: "Contact Page",
}
export default function AboutPage() {
    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold">Contact Page Day 1 🚀</h1> 
            <Link href="/about" className="text-blue-600 font-bold underline mt-4 block">About</Link>
        </main>
    )
}