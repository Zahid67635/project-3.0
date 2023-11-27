import { RxCross2 } from "react-icons/rx";

function RightSideDrawer({ isOpen, setIsOpen, children }) {
  return (
    <div
      className={`absolute top-0 bottom-0 right-0 z-10 flex flex-col w-4/5 gap-2 px-6 py-4 bg-white shadow-2xl shadow-neutral-800 lg:hidden ${
        !isOpen ? "translate-x-full" : ""
      } transition duration-200`}
    >
      <div className="flex justify-end w-full py-2">
        <RxCross2
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-2xl cursor-pointer text-violet-500"
        />
      </div>
      {children}
    </div>
  );
}

export default RightSideDrawer;
