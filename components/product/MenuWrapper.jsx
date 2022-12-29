import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto mb-16">
      <div className="w-full flex flex-col items-center">
        <Title addClass="text-[40px]">Our Menu</Title>
        <div className="mt-10">
          <button className="bg-secondary text-white rounded-3xl px-6 py-2">
            All
          </button>
          <button className="rounded-3xl px-6 py-2">Burger</button>
          <button className="rounded-3xl px-6 py-2">Pizza</button>
          <button className="rounded-3xl px-6 py-2">Drink</button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuWrapper;
