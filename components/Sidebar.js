// components/Sidebar.js


import React from 'react';
import Link from 'next/link';


function SideButton({ path, imageURL }) {

  return (
    <Link href={path}>
      <div className="flex items-center justify-center w-full h-1/5">
        <img src={imageURL} alt="Button" className="w-full h-full object-cover" />
      </div>
    </Link>
  );
}

function Sidebar() {
  return (
    <div className="flex flex-col w-1/5 h-screen bg-gray-200">
      <SideButton path="/" imageURL="/path/to/image1.png" />
      <SideButton path="/Resume" imageURL="/path/to/image2.png" />
      <SideButton path="/GitHub" imageURL="/path/to/image3.png" />
      <SideButton path="/page4" imageURL="/path/to/image4.png" />
      <SideButton path="/page5" imageURL="/path/to/image5.png" />
    </div>
  );
}

export default Sidebar;
