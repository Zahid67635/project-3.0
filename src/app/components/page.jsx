import NavLink from "@/components/buttons/NavLink";

const componentsList = [
  { name: "Buttons", href: "/components/buttons" },
  { name: "Navbar", href: "/components/navbar" },
  { name: "SearchAndSelect", href: "/components/searchAndSelect" },
  { name: "InputField", href: "/components/inputField" },
  { name: "Modal", href: "/components/modal" },
  { name: "Logo", href: "/components/logo" },
  { name: "Footer", href: "/components/footer" },
];

function page() {
  return (
    <div className="flex flex-col min-h-screen gap-5 py-24 px-[20%] bg-slate-100">
      <div className="font-bold text-center">Common Components</div>
      <ul className="flex flex-col gap-2 list-disc">
        {componentsList.map((item) => {
          return (
            <li key={item.name}>
              <NavLink href={item.href}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default page;
