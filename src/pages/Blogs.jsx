import React from "react";
import user from "../assets/js/data/user";
import { CardFullWidth } from "../components/cards/cardFullWidth/CardFullWidth";

const Blogs = () => {
  return (
    <div className="blogs">
      <h1 className="app-heading1 text-center">Blogs</h1>
        <div className="content-child">
          {user.blogs.map((blog, index) => (
            <CardFullWidth data={blog} key={index} />
            ))}
        </div>
    </div>
  );
};

export default Blogs;
