import React from "react";

function List({ menuText }) {
  return (
    <>
      {menuText.map((menuItem, index) => (
        <li
          key={`${menuItem}-${index}`}
          className="flex items-center justify-center bg-amber-900 p-1 hover:text-4xl transition-text duration-100"
        >
          <a href="" className="">
            {menuItem}
          </a>
        </li>
      ))}
    </>
  );
}

function MainMenu() {
  let menuText = ["Play Games", "Watch TV", "How to Use", "Credits"];
  return (
    <ul className="flex flex-col w-1/4 p-2 bg-black gap-2 text-3xl text-white">
      <List menuText={menuText} />
    </ul>
  );
}

export default MainMenu;
