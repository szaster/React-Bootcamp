import React from "react";

function CreatePost() {
  return (
    <div>
      <h1>Create New Post</h1>
      <form>
        <input type="text" placeholder="Add Post Content"></input>
        <input type="file"></input>
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
