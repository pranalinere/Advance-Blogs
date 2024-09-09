import React, { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";
const Blogs = (props) => {

  const { posts, fetchData, loading } = useContext(AppContext);
  useEffect(() => {
    fetchData(1);
  }, [])

  return (
    <div className="w-6/12 max-w-[1250px] flex flex-col gap-7  pt-20 pb-20  h-full mx-auto">

      {loading ? (<div className="flex justify-center mt-52"><Spinner/></div>) :

        (posts.map((blog) => {
          return (<BlogDetails key={blog.id} post={blog}  />)
        }))}

    </div>
  )
};

export default Blogs;
