import { useContext } from "react";
import Post from "./Post";
import Welcome from "./Welcome";
import { PostList as PostListData } from "./Store/Post-List-Store";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const onfetchingpost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((Data) => {
        addInitialPosts(Data.posts);
      });
  };

  return (
    <>
      <center>
        <Welcome Fetchingpost={onfetchingpost}></Welcome>
      </center>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
