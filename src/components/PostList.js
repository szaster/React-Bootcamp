import React from "react";
import Post from "./Post";

function PostList({ posts, user }) {
  return posts.map((post) => <Post key={post.id} {...post} />);
}

export default PostList;
