import React from 'react';
import { MdOutlineWeb } from 'react-icons/md';

const ServiceCard = ({ id, icon, title, color }) => {
  return (
    <div
      className={` ${color} p-5 space-y-5 rounded-md hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all cursor-pointer`}
      key={id}
    >
      <div className=" bg-white inline-block px-3 py-3 border-2 border-black rounded-full">
        {icon}
      </div>
      <div className=" space-y-4">
        <h1 className=" text-3xl font-bold">{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quaerat exercitationem ab praesentium mollitia quis.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
