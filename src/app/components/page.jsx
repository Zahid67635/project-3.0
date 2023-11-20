import Link from "next/link";

const componentsList = [
  { name: "Buttons", href: "/components/buttons" },
  { name: "Navbar", href: "/components/navbar" },
];

function page() {
  return (
    <div className="flex flex-col min-h-screen gap-5 py-24 px-[20%] bg-slate-100">
      <div className="font-bold text-center">Common Components</div>
      <ul className="list-disc">
        {componentsList.map((item) => {
          return (
            <li key={item.name} className="hover:text-green-600">
              <Link href="/components/navbar">{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default page;
