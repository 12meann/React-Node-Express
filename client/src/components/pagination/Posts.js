import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className="has-text-centered">Loading...</h2>;
  }
  return (
    <div className="posts">
      {posts.map(post => {
        return (
          <div className="box" key={post.id}>
            <div className="content">
              <p className="title">{post.title}</p>
              <p className="subtitle">{post.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
