import React from "react";

function Post({ image, content, user }) {
  return (
    <React.Fragment>
      <div>
        {image && (
          <img
            style={{ height: 100, width: 200, objectFit: "cover" }}
            src={URL.createObjectURL(image)}
            alt="Post cover"
          />
        )}
        <p>{content}</p>
        <div>{user}</div>
      </div>
    </React.Fragment>
  );
}

export default Post;
