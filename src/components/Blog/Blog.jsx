import "./Blog.css";
import { client, urlFor } from "@/client";
import { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "posts"][0..2]';
    let ignore = false;

    client.fetch(query).then((data) => {
      if (ignore) return;
      setPosts(data);
    });

    return () => (ignore = true);
  }, []);

  return (
    <section id="blog" className="blog pink">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>

        <div className="content-container">
          {posts.map((post) => (
            <div className="post" key={post._id}>
              <div className="tag">{post.label}</div>
              <img src={urlFor(post.thumbnail)} />
              <a href="#">
                <h3 className="post-title">{post.title}</h3>
              </a>
            </div>
          ))}
        </div>

        <div className="btn-container">
          <a href="#" className="all-posts-btn">
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
