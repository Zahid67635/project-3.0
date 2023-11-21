import NavLink from "@/components/buttons/NavLink";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <h2 className="text-lg font-bold">Edu Wave</h2>
      <NavLink href="/components">Common Components</NavLink>
    </main>
  );
}
