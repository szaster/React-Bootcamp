import React from "react";

function Post({ post }) {
  return (
    <React.Fragment>
      <div>
        {post.image && (
          <img
            style={{ height: 100, width: 200, objectFit: "cover" }}
            src={URL.createObjectURL(post.image)}
            alt="Post cover"
          />
        )}
        <p>{post.content}</p>
        <div>{post.user}</div>
      </div>
    </React.Fragment>
  );
}

export default Post;
