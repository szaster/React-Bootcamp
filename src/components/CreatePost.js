import React from "react";

function CreatePost({ user, setPosts, posts }) {
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);
  const imageInputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const post = { content: content, image: image, user: user };
    const newPosts = [post, ...posts];
    setPosts(newPosts);
    //clears input, in <input> component set value={content}
    setContent("");
    imageInputRef.current.value = "";
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Post Content"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
          ref={imageInputRef}
        ></input>
        <button type="submit">Submit Post</button>
      </form>

      {/* {image && (
        <img
          style={{ height: 200, width: 200, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
        />
      )} */}
    </div>
  );
}

export default CreatePost;
