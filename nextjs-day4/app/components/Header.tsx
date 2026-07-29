import Link from "next/link";

export default function Header() {
    return (
        <header className="p-4 bg-gray-100 flex gap-4">
            <h1 className="text-3xl text-black font-bold">Header day 2 🚀</h1> 
            <Link href="/" className="text-blue-600 font-bold">Home</Link>
            <Link href="/about" className="text-blue-600 font-bold">About</Link>
            <Link href="/blog" className="text-blue-600 font-bold">Blog</Link>
            <Link href="/contact" className="text-blue-600 font-bold">Contact</Link>
        </header>
    )
}