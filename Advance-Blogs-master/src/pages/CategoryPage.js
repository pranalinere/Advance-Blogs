import React from "react"
import Header from "../components/Header";
import {  useLocation, useNavigate } from "react-router-dom";
import Pageinitiaton from "../components/Pageinitiation";
import Blogs from "../components/Blogs";

const CategoryPage = (props) => {
  const navigator=useNavigate();
  const location=useLocation();
  const category=location.pathname.split("/").at(-1).replace("-"," ");

  return (
    <div>
         
       <div className="w-6/12 max-w-[1250px] flex items-center gap-2  pt-20   mx-auto -mb-14">
        <button onClick={()=>{
            navigator(-1);
        }} className="border-2 py-1 px-2 rounded-md w-20">back</button>
        <p className="font-bold py-3 text-xl ">Blogs on <span className="underline">{category}</span></p>
      </div>
      <Blogs />
       
      <Pageinitiaton/>
    </div>
  )
};

export default CategoryPage;
