// components/Sidebar.js


import React from 'react';
import Link from 'next/link';


function SideButton({ path, imageURL }) {
  return (
    <Link href={path}>
      <button className="flex items-center justify-center h-1/5 bg-white">
        <img src={imageURL} alt="Button" className="w-2/3 h-2/3 object-cover" />
      </button>
    </Link>
  );
}

function Sidebar() {
  return (
    <div className="h-screen w-1/5 bg-gray-200 flex flex-col">
      <div className="flex flex-col flex-grow justify-between">
        <SideButton path="/" imageURL="/path/to/image1.png" />
        <SideButton path="/Resume" imageURL="/path/to/image2.png" />
        <SideButton path="/GitHub" imageURL="/path/to/image3.png" />
        <SideButton path="/LinkedIn" imageURL="/path/to/image4.png" />
        <SideButton path="/ContactMe" imageURL="/path/to/image5.png" />
      </div>
    </div>
  );
}

export default Sidebar;
