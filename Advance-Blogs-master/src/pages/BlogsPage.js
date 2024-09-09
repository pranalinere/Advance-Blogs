import React, { useContext, useEffect, useState } from "react"
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pageinitiaton from "../components/Pageinitiation";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import BlogDetails from "../components/BlogDetails";


const BlogsPage = (props) => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigator = useNavigate();
  const location = useLocation();
  const { loading, setLoading, baseUrl } = useContext(AppContext);
  const blogId = location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`
    console.log("related blogs url "+url);
    try {
      const res = await axios.get(url);
      // console.log(res);
      setBlog(res.data.blog);
      setRelatedBlogs(res.data.relatedBlogs);
    
    }
    catch (error) {
      //  toast.error("Couldn't fetch ");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchRelatedBlogs()
  }, [location.pathname]);

  return (
    <div>
       
      <div className="w-6/12 max-w-[1250px] flex flex-col gap-10  pt-20 pb-20  h-full mx-auto">
      <div className="">
        <button onClick={() => {
          navigator(-1);
        }} className="border-2  py-1 px-2 rounded-md w-20 font-semibold  ">Back</button>
      </div>
      <div>
        {loading ? <div>loading</div> :

          blog ? <div className="flex flex-col gap-7">
            <BlogDetails post={blog} key={blog.id}/>
            <p className="font-bold   text-xl  w-full">Related Blogs</p>
            {relatedBlogs.map((blog) => {
              return (<BlogDetails post={blog} key={blog.id}   />)
            })}
          </div> : <div>Not found</div>}
      </div>

      </div>

    </div>
  )
};

export default BlogsPage;
