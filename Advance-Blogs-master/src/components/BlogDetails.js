import React from "react"
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="flex flex-col gap-1 ">
      <NavLink to={`/blog/${post.id}`} className="text-black font-bold text-md" >{post.title}</NavLink>
      <div>
        <p className="italic flex gap-1 "><span >By</span>{post.author}<span>on</span><span
          className=" not-italic underline">
          <NavLink to={`/category/${post.category.replaceAll(" ", "-")}`}>{post.category}</NavLink></span></p>

        <p><span className="pr-1" >Posted on</span>{post.date}</p>
      </div>
      <p className="mt-1" >{post.content}</p>

      <p className="flex gap-1 flex-wrap ">
        {post.tags.map((tag, index) => {
          return <p key={index} className="text-blue-700 underline font-bold text-xs">#<NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}>{tag}</NavLink></p>
        })}
      </p>
    </div>
  )
};

export default BlogDetails;
