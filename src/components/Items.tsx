import React from "react";
interface props {
  mytask: {
    task: String;
    description: string;
  };
}
const Items: React.FC<props> = ({ mytask }: props) => {
  return (
    <div className="bg-purple-300 w-1/2 my-2 border border-red-700  flex justify-between text-start gap-5 p-5">
      <div>
        <p className=" font-bold text-red-700">{mytask.task}</p>
        <p className="text-xs">{mytask.description} </p>
      </div>
      <button className="text-blue-700 hover:text-blue-500">Edit</button>
      <button className="text-red-800 hover:text-red-500">Delete</button>
    </div>
  );
};
export default Items;
