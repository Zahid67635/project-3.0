"use client";
import Modal from "@/components/modal/Modal";
import React, { useState } from "react";

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded focus:outline-none focus:shadow-outline"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
        <h1>My modal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas itaque
          cumque temporibus molestias eum pariatur a eaque sit. Eaque nesciunt
          vitae, facilis veniam voluptas rerum! Aspernatur quos commodi odit
          enim.
        </p>
      </Modal>
    </div>
  );
}

export default Page;
