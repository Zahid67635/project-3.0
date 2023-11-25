import Navbar from "@/components/navbar/Navbar";

function page() {
  return (
    <div className="min-h-screen flex flex-col gap-6 py-24 px-[5%] md:px-[10%]">
      <h2 className="font-semibold text-center">Navbar</h2>
      <div className="flex flex-col gap-2">
        <div className="flex items-center p-6 border-2 border-gray-200 border-dashed">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default page;
