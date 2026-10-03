import React from "react";
import { Link } from 'react-router-dom';

function List({ navLinksObj}) {
  return (
    <>
      {navLinksObj.map((link) => (
        <li
          key={link.id}
          className="flex items-center justify-center bg-amber-900 p-1 hover:text-4xl transition-text duration-100"
        >
          {/* solve this link issue */}
          <Link to={link.path}>{link.title}</Link>
      
        </li>
      ))}
    </>
  );
}

function MainMenu() {
  const navLinks=[
    {id:1,title:"Play Games",path:"/games"},
    {id:2,title:"Watch TV",path:"television"},
    {id:3,title:"How to Use",path:"help"},
    {id:4,title:"Credits",path:"credits"}
  ]
  return (
    <ul className="flex flex-col w-1/4 p-2 bg-black gap-2 text-3xl text-white">
      <List navLinksObj={navLinks}/>
    </ul>
  );
}

export default MainMenu;
