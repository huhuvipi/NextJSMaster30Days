import Counter from "./components/Counter";
export const metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Day 1 – Next.js Master Plan 🚀
      </h1>

      <Counter />
    </main>
  )
}