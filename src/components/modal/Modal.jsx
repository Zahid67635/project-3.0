import React from "react";
import { HiMiniXCircle } from "react-icons/hi2";

function Modal({ isOpen, setIsOpen, children }) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="absolute max-w-lg p-8 bg-white rounded-lg shadow-lg">
            <div className="flex justify-end">
              <div className={`cursor-pointer`} onClick={closeModal}>
                <HiMiniXCircle className="text-2xl transition duration-300 ease-in-out hover:text-slate-400" />
              </div>
            </div>

            <div className="mb-3">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
