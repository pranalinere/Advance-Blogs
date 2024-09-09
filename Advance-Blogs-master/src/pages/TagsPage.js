import React, { useContext } from "react"
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pageinitiaton from "../components/Pageinitiation";
import { AppContext } from "../context/AppContext";
import BlogDetails from "../components/BlogDetails";

const TagsPage = (props) => {
  const navigator=useNavigate();
  const location=useLocation();
  const tag=location.pathname.split('/').at(-1).replace("-"," ");
   

  // const { posts, fetchData, loading } = useContext(AppContext);
  // useEffect(() => {
  //   fetchData();
  // }, [])


  return (
    <div>
       <div className="w-6/12 max-w-[1250px] flex items-center gap-2  pt-20   mx-auto -mb-14">
        <button onClick={()=>{navigator(-1)}} className="border-2 py-1 px-2 rounded-md w-20">Back</button>
        <p className="font-bold py-3 text-xl ">Blogs Tagged <span className="text-blue-700">#{tag}</span></p>
      </div>
      
          <Blogs/>
      
      <Pageinitiaton/>
    </div>
  )
};

export default TagsPage;
