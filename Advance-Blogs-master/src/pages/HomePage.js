import React from "react"
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pageinitiaton from "../components/Pageinitiation";

const HomePage = (props) => {
  return (
    <div className="">
       <Blogs/>
      <Pageinitiaton/>
    </div>
  )
};

export default HomePage;
