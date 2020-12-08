import React from "react";

function CreatePost() {
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);
  return (
    <div>
      <h1>Create New Post</h1>
      <form>
        <input type="text" placeholder="Add Post Content"></input>
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
        ></input>
        <button type="submit">Submit Post</button>
      </form>
      <p>{content}</p>
      {image && (
        <img
          style={{ height: 200, width: 200, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
        />
      )}
    </div>
  );
}

export default CreatePost;
