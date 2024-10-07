import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import Welcome from "./Welcome";
import { PostList as PostListData } from "./Store/Post-List-Store";
import Loadingspinner from "./Loadingspinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const[feching, setfetching] = useState(false);

 
 

useEffect(() => {
  setfetching(true);

  fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then((Data) => {
    addInitialPosts(Data.posts);
    setfetching(false);
  });

}, [])





  return (
    <>
    { feching &&   <Loadingspinner/>}
     {!feching && postList.length === 0 &&  <Welcome/>}
       
     
      { !feching && postList.map((post) => (
        <Post key={post.id} post={post}  />
      ))}
    </>
  );
};

export default PostList;
