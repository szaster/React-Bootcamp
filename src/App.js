import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

//Set is a data structure that added in ES6, has unique values, throws out all duplicates
//const functionsCount = new Set();

export const UserContext = React.createContext();
export const PostContext = React.createContext({
  posts: [],
});

function App() {
  const initialPostState = React.useContext(PostContext);
  const [state, dispatch] = React.useReducer(() => {}, initialPostState);
  const [user, setUser] = React.useState("");
  // const [posts, setPosts] = React.useState([]);

  //const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login";
  }, [user]);

  //second callback tells when to execute this function
  // const handleAddPost = React.useCallback(
  //   (newPost) => {
  //     setPosts([newPost, ...posts]);
  //   },
  //   [posts]
  // );

  // functionsCount.add(handleAddPost);
  //console logs # of functions stored here. Prevents
  //console.log(functionsCount);

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <PostContext.Provider value = {{state, dispatch}}>
    <UserContext.Provider value={user}>
      <Header user={user} setUser={setUser} />
      {/* <CreatePost user={user} setPosts={setPosts} posts={posts} /> */}
      <CreatePost user={user}
      //  handleAddPost={handleAddPost} />
      <PostList posts={posts} />
      {/* <button onClick={() => setCount((prev) => prev + 1)}>{count}+</button> */}
    </UserContext.Provider>
    </PostContext.Provider>
  );
}
export default App;
