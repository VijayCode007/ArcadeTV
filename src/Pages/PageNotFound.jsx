import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center">
      <div className="w-auto h-auto gap-3 border-red-500 border-2 p-5 flex flex-col items-center justify-center">
        <div className="text-red-600 text-5xl font-bold ">!!! ERROR !!!</div>
        <div className="text-red-500 text-2xl font-medium">Error 404 , Page Not Found</div>
      </div>
      <Link to={"/"} ><button className=" my-5 cursor-pointer font-medium text-lg p-2 bg-gray-700 hover:bg-gray-400 ">GO TO HOME</button></Link>
    </div>
  );
}

export default PageNotFound;
