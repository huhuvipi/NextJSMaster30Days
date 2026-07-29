import Link from "next/link";
export const metadata = {
    title: "Blog",
    description: "Blog Page ",
}
export default function AboutPage() {
    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold">Blog Page Day 1 🚀</h1> 
            <Link href="/" className="text-blue-600 font-bold underline mt-4 block">Home</Link>
        </main>
    )
}