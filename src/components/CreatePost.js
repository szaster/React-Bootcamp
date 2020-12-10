import React from "react";

function CreatePost({ user, handleAddPost }) {
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);
  const imageInputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const post = { content: content, image: image, user: user };
    //creating an array of new and old posts
    // const newPosts = [post, ...posts];

    //calling a setter function
    // setPosts(newPosts);

    //Alternative way of updating post state
    // setPosts((prevPost) => [post, ...prevPost]);
    //Another, better alternative: using callback
    handleAddPost(post);
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
    </div>
  );
}

export default CreatePost;
